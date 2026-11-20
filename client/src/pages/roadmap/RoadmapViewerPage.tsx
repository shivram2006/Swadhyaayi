import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  FolderGit2,
  HelpCircle,
  BookMarked,
  Wrench,
  GraduationCap,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

interface Resource {
  title: string;
  url?: string;
  type: string;
}

interface Topic {
  topicId: string;
  title: string;
  subtopics: string[];
  toolsAndTechnologies: string[];
  industrySkills: string[];
  recommendedResources: Resource[];
}

interface Assignment {
  id: string;
  title: string;
  description: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
}

interface Project {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

interface InterviewQ {
  question: string;
  concept: string;
}

interface Stage {
  stageId: string;
  title: string;
  order: number;
  topics: Topic[];
  practicalAssignments: Assignment[];
  capstoneProjects: Project[];
  interviewPreparation: InterviewQ[];
}

interface RoadmapDetails {
  slug: string;
  title: string;
  category: string;
  description: string;
  version: number;
  estimatedHours: number;
  prerequisites: string[];
  stages: Stage[];
}

interface UserProgress {
  enrolled: boolean;
  progressPercentage: number;
  completedTopicIds: string[];
  completedAssignmentIds: string[];
  completedProjectIds: string[];
  isCompleted: boolean;
}

export const RoadmapViewerPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [roadmap, setRoadmap] = useState<RoadmapDetails | null>(null);
  const [progress, setProgress] = useState<UserProgress>({
    enrolled: false,
    progressPercentage: 0,
    completedTopicIds: [],
    completedAssignmentIds: [],
    completedProjectIds: [],
    isCompleted: false,
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedInterviewQuestions, setExpandedInterviewQuestions] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (slug) {
      fetchRoadmapDetails(slug);
    }
  }, [slug]);

  const fetchRoadmapDetails = async (roadmapSlug: string) => {
    try {
      setLoading(true);
      const res = await axios.get(`/roadmaps/${roadmapSlug}`);
      if (res.data?.success) {
        setRoadmap(res.data.data.roadmap);
        setProgress(res.data.data.progress);
      }
    } catch (err) {
      console.error('Error fetching roadmap details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!slug) return;
    try {
      const res = await axios.post(`/roadmaps/${slug}/enroll`);
      if (res.data?.success) {
        setProgress((prev) => ({
          ...prev,
          enrolled: true,
          progressPercentage: res.data.data.progressPercentage || 0,
        }));
      }
    } catch (err) {
      console.error('Error enrolling in roadmap:', err);
    }
  };

  const handleToggleProgress = async (
    itemType: 'topic' | 'assignment' | 'project',
    itemId: string,
    currentStatus: boolean
  ) => {
    if (!slug) return;
    const newStatus = !currentStatus;

    // Optimistic local state update
    setProgress((prev) => {
      let updatedTopics = [...prev.completedTopicIds];
      let updatedAssignments = [...prev.completedAssignmentIds];
      let updatedProjects = [...prev.completedProjectIds];

      if (itemType === 'topic') {
        if (newStatus) updatedTopics.push(itemId);
        else updatedTopics = updatedTopics.filter((id) => id !== itemId);
      } else if (itemType === 'assignment') {
        if (newStatus) updatedAssignments.push(itemId);
        else updatedAssignments = updatedAssignments.filter((id) => id !== itemId);
      } else if (itemType === 'project') {
        if (newStatus) updatedProjects.push(itemId);
        else updatedProjects = updatedProjects.filter((id) => id !== itemId);
      }

      const totalTopics = roadmap?.stages.reduce((acc, s) => acc + (s.topics?.length || 0), 0) || 1;
      const newPct = Math.min(100, Math.round((updatedTopics.length / totalTopics) * 100));

      return {
        ...prev,
        enrolled: true,
        completedTopicIds: updatedTopics,
        completedAssignmentIds: updatedAssignments,
        completedProjectIds: updatedProjects,
        progressPercentage: newPct,
        isCompleted: newPct === 100,
      };
    });

    try {
      await axios.post(`/roadmaps/${slug}/progress`, {
        itemType,
        itemId,
        completed: newStatus,
      });
    } catch (err) {
      console.error('Error syncing progress with server:', err);
      // Fallback reload on network error
      if (slug) fetchRoadmapDetails(slug);
    }
  };

  const toggleInterviewQuestion = (key: string) => {
    setExpandedInterviewQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 w-40 bg-slate-800 rounded"></div>
        <div className="h-44 bg-slate-900 rounded-2xl border border-slate-800"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-slate-900 rounded-xl border border-slate-800"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!roadmap) {
    return (
      <Card className="p-12 text-center">
        <h3 className="text-lg font-bold text-white">Roadmap not found</h3>
        <p className="text-slate-400 text-sm mt-1">The requested career track does not exist.</p>
        <Button onClick={() => navigate('/roadmaps')} variant="outline" className="mt-4">
          Return to Catalog
        </Button>
      </Card>
    );
  }

  const totalTopics = roadmap.stages.reduce((acc, s) => acc + (s.topics?.length || 0), 0);
  const completedTopicsCount = progress.completedTopicIds.length;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Navigation */}
      <button
        onClick={() => navigate('/roadmaps')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Career Roadmaps
      </button>

      {/* Header Banner & Enrollment Gauge */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-brand-950/20 to-slate-900 border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="brand" className="bg-brand-500/10 text-brand-300 border-brand-500/30 text-xs">
                {roadmap.category}
              </Badge>
              <span className="text-xs text-slate-500">Curriculum v{roadmap.version}.0</span>
              {progress.isCompleted && (
                <Badge variant="success" className="text-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Track Completed
                </Badge>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{roadmap.title}</h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">{roadmap.description}</p>
          </div>

          {/* Action / Progress Gauge */}
          <div className="flex flex-col items-start md:items-end gap-3 min-w-[200px]">
            {!progress.enrolled ? (
              <Button onClick={handleEnroll} variant="primary" className="w-full md:w-auto font-semibold">
                Start Tracking Curriculum
              </Button>
            ) : (
              <div className="w-full space-y-2 text-right">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Track Mastery</span>
                  <span className="font-bold text-brand-300 text-sm">{progress.progressPercentage}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-500 to-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${progress.progressPercentage}%` }}
                  ></div>
                </div>
                <div className="text-[11px] text-slate-500 text-right">
                  {completedTopicsCount} of {totalTopics} topics mastered
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prerequisites and Metrics */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-500" />
            <span>Estimated Study Time: ~{roadmap.estimatedHours} hours</span>
          </div>
          {roadmap.prerequisites && roadmap.prerequisites.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-500 font-medium">Prerequisites:</span>
              {roadmap.prerequisites.map((p, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                  {p}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Stages Timeline & Node Progression */}
      <div className="space-y-6">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-brand-400" />
          Curriculum Stages & Learning Nodes
        </h2>

        {roadmap.stages.map((stage, sIdx) => {
          const stageTopicIds = stage.topics.map((t) => t.topicId);
          const stageCompletedTopics = stageTopicIds.filter((id) =>
            progress.completedTopicIds.includes(id)
          ).length;
          const stageDone = stageTopicIds.length > 0 && stageCompletedTopics === stageTopicIds.length;

          return (
            <Card
              key={stage.stageId}
              className={`p-6 bg-slate-900/90 border transition-colors ${
                stageDone ? 'border-emerald-500/30' : 'border-slate-800'
              }`}
            >
              {/* Stage Title and Progress */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                      stageDone
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-brand-500/20 text-brand-300 border border-brand-500/30'
                    }`}
                  >
                    {sIdx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{stage.title}</h3>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {stageCompletedTopics} of {stageTopicIds.length} topics completed
                    </div>
                  </div>
                </div>
                {stageDone && (
                  <Badge variant="success" className="text-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Stage Mastered
                  </Badge>
                )}
              </div>

              {/* Topics Breakdown */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Core Topics & Competencies
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {stage.topics.map((topic) => {
                    const isTopicCompleted = progress.completedTopicIds.includes(topic.topicId);

                    return (
                      <div
                        key={topic.topicId}
                        className={`p-4 rounded-xl border transition-all ${
                          isTopicCompleted
                            ? 'bg-slate-950/60 border-slate-800/80 opacity-90'
                            : 'bg-slate-950/90 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() =>
                              handleToggleProgress('topic', topic.topicId, isTopicCompleted)
                            }
                            className="mt-0.5 text-slate-500 hover:text-brand-400 transition-colors flex-shrink-0"
                          >
                            {isTopicCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            ) : (
                              <Circle className="w-5 h-5 text-slate-600 hover:text-brand-400" />
                            )}
                          </button>

                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <span
                                className={`text-sm font-semibold ${
                                  isTopicCompleted ? 'line-through text-slate-400' : 'text-white'
                                }`}
                              >
                                {topic.title}
                              </span>
                            </div>

                            {/* Subtopics */}
                            {topic.subtopics && topic.subtopics.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {topic.subtopics.map((sub, sIdx2) => (
                                  <span
                                    key={sIdx2}
                                    className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[11px] border border-slate-800"
                                  >
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Tools & Technologies */}
                            {topic.toolsAndTechnologies && topic.toolsAndTechnologies.length > 0 && (
                              <div className="flex items-center gap-1.5 pt-1 flex-wrap text-xs text-slate-400">
                                <Wrench className="w-3.5 h-3.5 text-slate-500" />
                                <span className="text-[11px] text-slate-500 font-medium">Tools:</span>
                                {topic.toolsAndTechnologies.map((tool, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="px-1.5 py-0.5 rounded bg-brand-950/40 text-brand-300 text-[10px] font-mono border border-brand-500/20"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Resources Accordion */}
                            {topic.recommendedResources && topic.recommendedResources.length > 0 && (
                              <div className="pt-2 flex items-center gap-3 text-xs">
                                <span className="text-slate-500 text-[11px] flex items-center gap-1">
                                  <BookMarked className="w-3 h-3 text-slate-500" />
                                  Resources:
                                </span>
                                {topic.recommendedResources.map((res, rIdx) => (
                                  <span
                                    key={rIdx}
                                    className="inline-flex items-center gap-1 text-[11px] text-brand-400 hover:text-brand-300"
                                  >
                                    <span>{res.title}</span>
                                    <span className="text-[10px] px-1 py-0.2 bg-slate-800 text-slate-400 rounded">
                                      {res.type}
                                    </span>
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Practical Assignments (if any) */}
              {stage.practicalAssignments && stage.practicalAssignments.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-brand-400" />
                    Practical Hands-On Assignments
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {stage.practicalAssignments.map((a) => {
                      const isDone = progress.completedAssignmentIds.includes(a.id);
                      return (
                        <div
                          key={a.id}
                          className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3"
                        >
                          <button
                            onClick={() => handleToggleProgress('assignment', a.id, isDone)}
                            className="mt-0.5"
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-600 hover:text-brand-400" />
                            )}
                          </button>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-bold ${isDone ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                                {a.title}
                              </span>
                              <Badge
                                variant={
                                  a.difficulty === 'ADVANCED'
                                    ? 'danger'
                                    : a.difficulty === 'INTERMEDIATE'
                                    ? 'warning'
                                    : 'brand'
                                }
                                className="text-[10px] py-0 px-1.5"
                              >
                                {a.difficulty}
                              </Badge>
                            </div>
                            <p className="text-[11px] text-slate-400 leading-relaxed">{a.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Capstone Projects (if any) */}
              {stage.capstoneProjects && stage.capstoneProjects.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
                    Capstone Placement Portfolio Projects
                  </h4>
                  <div className="space-y-3">
                    {stage.capstoneProjects.map((p) => {
                      const isDone = progress.completedProjectIds.includes(p.id);
                      return (
                        <div
                          key={p.id}
                          className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/20 flex items-start gap-3"
                        >
                          <button
                            onClick={() => handleToggleProgress('project', p.id, isDone)}
                            className="mt-0.5"
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            ) : (
                              <Circle className="w-5 h-5 text-purple-400" />
                            )}
                          </button>
                          <div className="space-y-1.5 flex-1">
                            <div className="flex items-center justify-between">
                              <h5 className={`text-sm font-bold ${isDone ? 'line-through text-slate-500' : 'text-white'}`}>
                                {p.title}
                              </h5>
                              <Badge variant="brand" className="text-[10px] border-purple-500/30 text-purple-300">
                                Portfolio Artifact
                              </Badge>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
                            {p.deliverables && p.deliverables.length > 0 && (
                              <div className="pt-1 flex flex-wrap gap-2 text-[11px] text-slate-400">
                                <span className="font-semibold text-slate-500">Deliverables:</span>
                                {p.deliverables.map((d, dIdx) => (
                                  <span key={dIdx} className="px-2 py-0.5 bg-slate-900 rounded border border-slate-800 text-slate-300">
                                    • {d}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Interview Preparation (if any) */}
              {stage.interviewPreparation && stage.interviewPreparation.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                    Interview Preparation & Concept Explanations
                  </h4>
                  <div className="space-y-2">
                    {stage.interviewPreparation.map((q, qIdx) => {
                      const key = `${stage.stageId}-q-${qIdx}`;
                      const isExpanded = !!expandedInterviewQuestions[key];

                      return (
                        <div key={key} className="rounded-xl bg-slate-950/70 border border-slate-800/80 overflow-hidden">
                          <button
                            onClick={() => toggleInterviewQuestion(key)}
                            className="w-full p-3 text-left flex items-center justify-between text-xs font-semibold text-slate-200 hover:text-brand-300 transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                              {q.question}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </button>
                          {isExpanded && (
                            <div className="px-3 pb-3 pt-1 text-xs text-slate-400 border-t border-slate-800/50 bg-slate-900/40">
                              <div className="font-semibold text-brand-300 mb-1">Key Interview Concept:</div>
                              {q.concept}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};
