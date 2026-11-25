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
  GitBranch,
  Sparkles,
  Layers,
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
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({});
  const [expandedStageExtras, setExpandedStageExtras] = useState<Record<string, boolean>>({});
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

  const toggleTopic = (topicId: string) => {
    setExpandedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  const expandAllTopics = () => {
    if (!roadmap) return;
    const all: Record<string, boolean> = {};
    roadmap.stages.forEach((s) => s.topics.forEach((t) => { all[t.topicId] = true; }));
    setExpandedTopics(all);
  };

  const collapseAllTopics = () => {
    setExpandedTopics({});
  };

  const toggleStageExtras = (stageId: string) => {
    setExpandedStageExtras((prev) => ({
      ...prev,
      [stageId]: !prev[stageId],
    }));
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

      {/* Interactive Animated Roadmap Timeline */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-brand-400" />
              Interactive Learning Roadmap
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Click any topic node on the animated path to reveal its subtopics, tools &amp; study resources.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={expandAllTopics}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-brand-500/50 transition-colors"
            >
              Expand All Topics
            </button>
            <button
              type="button"
              onClick={collapseAllTopics}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Continuous Vertical Animated Spine Container */}
        <div className="relative pl-6 sm:pl-10 space-y-10">
          {/* Main Glowing Vertical Line + Animated Travelling Beam */}
          <div className="absolute left-3 sm:left-5 top-3 bottom-4 w-1 -translate-x-1/2 rounded-full bg-slate-800/90 overflow-hidden">
            <div className="w-full h-36 bg-gradient-to-b from-transparent via-brand-400 to-cyan-400 rounded-full animate-roadmap-beam opacity-90 shadow-[0_0_16px_rgba(99,102,241,0.8)]" />
          </div>

          {roadmap.stages.map((stage, sIdx) => {
            const stageTopicIds = stage.topics.map((t) => t.topicId);
            const stageCompletedTopics = stageTopicIds.filter((id) =>
              progress.completedTopicIds.includes(id)
            ).length;
            const stageDone = stageTopicIds.length > 0 && stageCompletedTopics === stageTopicIds.length;
            const hasExtras =
              (stage.practicalAssignments && stage.practicalAssignments.length > 0) ||
              (stage.capstoneProjects && stage.capstoneProjects.length > 0) ||
              (stage.interviewPreparation && stage.interviewPreparation.length > 0);
            const isExtrasOpen = !!expandedStageExtras[stage.stageId];

            return (
              <div key={stage.stageId} className="relative space-y-4">
                {/* Stage Milestone Node on the Animated Spine */}
                <div className="relative flex flex-wrap items-center justify-between gap-3 py-2">
                  {/* Glowing Stage Node Circle */}
                  <div
                    className={`absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center text-xs font-extrabold z-10 border-2 transition-all ${
                      stageDone
                        ? 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.7)]'
                        : 'bg-slate-950 text-brand-300 border-brand-500 shadow-[0_0_16px_rgba(99,102,241,0.5)]'
                    }`}
                  >
                    {stageDone ? <CheckCircle2 className="w-4 h-4" /> : sIdx + 1}
                  </div>

                  <div className="pl-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400 font-semibold">
                        Stage {sIdx + 1}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-xs text-slate-400">
                        {stageCompletedTopics}/{stageTopicIds.length} topics completed
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-0.5">{stage.title}</h3>
                  </div>

                  {stageDone && (
                    <Badge variant="success" className="text-xs flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Stage Mastered
                    </Badge>
                  )}
                </div>

                {/* Topic Nodes Branching Off the Animated Spine */}
                <div className="space-y-4 pl-2">
                  {stage.topics.map((topic, tIdx) => {
                    const isTopicCompleted = progress.completedTopicIds.includes(topic.topicId);
                    const isExpanded = !!expandedTopics[topic.topicId];
                    const subCount = topic.subtopics?.length || 0;

                    return (
                      <div key={topic.topicId} className="relative">
                        {/* Horizontal Animated Branch Connector from Main Spine to Topic Card */}
                        <div
                          className={`absolute -left-5 sm:-left-7 top-6 w-5 sm:w-7 h-0.5 transition-colors duration-300 ${
                            isExpanded
                              ? 'bg-gradient-to-r from-brand-500 to-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]'
                              : isTopicCompleted
                              ? 'bg-emerald-500/70'
                              : 'bg-slate-700'
                          }`}
                        />
                        {/* Connector Dot on the Spine */}
                        <div
                          className={`absolute -left-[23px] sm:-left-[31px] top-[21px] w-2.5 h-2.5 rounded-full z-10 transition-all duration-300 ${
                            isExpanded
                              ? 'bg-cyan-400 scale-125 shadow-[0_0_10px_rgba(34,211,238,0.9)]'
                              : isTopicCompleted
                              ? 'bg-emerald-400'
                              : 'bg-slate-600'
                          }`}
                        />

                        {/* Clickable Topic Card */}
                        <div
                          className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                            isExpanded
                              ? 'bg-slate-900/95 border-brand-500/60 shadow-xl shadow-brand-500/10'
                              : isTopicCompleted
                              ? 'bg-slate-900/50 border-emerald-500/30 hover:border-emerald-500/50'
                              : 'bg-slate-900/80 border-slate-800 hover:border-brand-500/40 hover:bg-slate-900'
                          }`}
                        >
                          {/* Topic Header Row (Click to Expand Subtopics) */}
                          <div
                            onClick={() => toggleTopic(topic.topicId)}
                            className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer select-none group"
                          >
                            <div className="flex items-center gap-3.5 min-w-0">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleToggleProgress('topic', topic.topicId, isTopicCompleted);
                                }}
                                className="text-slate-500 hover:text-brand-400 transition-colors flex-shrink-0"
                                title={isTopicCompleted ? 'Mark incomplete' : 'Mark topic completed'}
                              >
                                {isTopicCompleted ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                ) : (
                                  <Circle className="w-5 h-5 text-slate-500 group-hover:text-brand-400" />
                                )}
                              </button>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-[11px] font-mono text-slate-500">
                                    {sIdx + 1}.{tIdx + 1}
                                  </span>
                                  <h4
                                    className={`text-sm sm:text-base font-bold transition-colors ${
                                      isTopicCompleted
                                        ? 'line-through text-slate-400'
                                        : isExpanded
                                        ? 'text-brand-300'
                                        : 'text-white group-hover:text-brand-300'
                                    }`}
                                  >
                                    {topic.title}
                                  </h4>
                                </div>
                                <p className="text-xs text-slate-400 mt-0.5">
                                  {isExpanded
                                    ? 'Click to collapse subtopics'
                                    : `Click to explore ${subCount} subtopic${subCount === 1 ? '' : 's'} & resources`}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2.5 flex-shrink-0">
                              <span
                                className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
                                  isExpanded
                                    ? 'bg-brand-500/20 text-brand-300 border-brand-500/40'
                                    : 'bg-slate-800/80 text-slate-300 border-slate-700'
                                }`}
                              >
                                <Layers className="w-3 h-3" />
                                {subCount} Subtopics
                              </span>
                              <div
                                className={`p-1.5 rounded-lg transition-transform duration-300 ${
                                  isExpanded
                                    ? 'bg-brand-500/20 text-brand-300 rotate-180'
                                    : 'bg-slate-800 text-slate-400 group-hover:text-white'
                                }`}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </div>
                          </div>

                          {/* Expanded Subtopics Animated Branch Tree */}
                          {isExpanded && (
                            <div className="px-4 sm:px-6 pb-5 pt-2 border-t border-slate-800/80 bg-slate-950/60 space-y-5">
                              {/* Subtopics Branch List */}
                              {topic.subtopics && topic.subtopics.length > 0 && (
                                <div className="relative pl-6 pt-2 space-y-2.5">
                                  {/* Animated Sub-branch Vertical Line */}
                                  <div className="absolute left-2 top-2 bottom-3 w-0.5 bg-gradient-to-b from-brand-500 via-cyan-400 to-brand-500/20 rounded-full animate-branch-grow" />

                                  <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Subtopics to Master
                                  </div>

                                  {topic.subtopics.map((sub, subIdx) => (
                                    <div
                                      key={subIdx}
                                      style={{ animationDelay: `${subIdx * 55}ms` }}
                                      className="relative flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900 transition-all animate-subtopic-reveal"
                                    >
                                      {/* Horizontal tick from sub-branch line */}
                                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-cyan-500/60" />
                                      <div className="absolute -left-[19px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />

                                      <span className="w-6 h-6 rounded-md bg-brand-500/15 border border-brand-500/30 text-brand-300 text-[11px] font-mono font-bold flex items-center justify-center flex-shrink-0">
                                        {String(subIdx + 1).padStart(2, '0')}
                                      </span>
                                      <span className="text-xs sm:text-sm font-medium text-slate-200">
                                        {sub}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Tools & Industry Skills */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                {topic.toolsAndTechnologies && topic.toolsAndTechnologies.length > 0 && (
                                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                      <Wrench className="w-3.5 h-3.5 text-brand-400" />
                                      Tools &amp; Technologies
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                      {topic.toolsAndTechnologies.map((tool, tIdx2) => (
                                        <span
                                          key={tIdx2}
                                          className="px-2 py-0.5 rounded-md bg-brand-950/50 text-brand-300 text-[11px] font-mono border border-brand-500/25"
                                        >
                                          {tool}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {topic.industrySkills && topic.industrySkills.length > 0 && (
                                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                      <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                                      Industry Competencies
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                      {topic.industrySkills.map((skill, skIdx) => (
                                        <span
                                          key={skIdx}
                                          className="px-2 py-0.5 rounded-md bg-emerald-950/40 text-emerald-300 text-[11px] border border-emerald-500/25"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* Recommended Resources */}
                              {topic.recommendedResources && topic.recommendedResources.length > 0 && (
                                <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-2">
                                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                                    <BookMarked className="w-3.5 h-3.5 text-amber-400" />
                                    Recommended Resources
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    {topic.recommendedResources.map((res, rIdx) => (
                                      <span
                                        key={rIdx}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-brand-300"
                                      >
                                        <span>{res.title}</span>
                                        <span className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded font-mono">
                                          {res.type}
                                        </span>
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Collapsible Stage Assignments, Capstone Projects & Interview Prep */}
                  {hasExtras && (
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => toggleStageExtras(stage.stageId)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <FolderGit2 className="w-4 h-4 text-purple-400" />
                          Stage {sIdx + 1} Practice Labs, Capstone Projects &amp; Interview Prep
                        </span>
                        {isExtrasOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </button>

                      {isExtrasOpen && (
                        <div className="mt-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-5 animate-subtopic-reveal">
                          {/* Practical Assignments */}
                          {stage.practicalAssignments && stage.practicalAssignments.length > 0 && (
                            <div className="space-y-3">
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

                          {/* Capstone Projects */}
                          {stage.capstoneProjects && stage.capstoneProjects.length > 0 && (
                            <div className="space-y-3 pt-3 border-t border-slate-800/80">
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

                          {/* Interview Preparation */}
                          {stage.interviewPreparation && stage.interviewPreparation.length > 0 && (
                            <div className="space-y-3 pt-3 border-t border-slate-800/80">
                              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                                Interview Preparation &amp; Concept Explanations
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
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
