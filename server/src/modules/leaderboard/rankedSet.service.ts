export interface RankedMember {
  member: string;
  score: number;
}

export class RankedSetService {
  private static sets: Map<string, RankedMember[]> = new Map();
  private static scoreMaps: Map<string, Map<string, number>> = new Map();

  static addOrUpdate(key: string, member: string, score: number): void {
    if (!this.sets.has(key)) {
      this.sets.set(key, []);
      this.scoreMaps.set(key, new Map());
    }

    const set = this.sets.get(key)!;
    const scoreMap = this.scoreMaps.get(key)!;

    // If member already exists, remove old entry
    if (scoreMap.has(member)) {
      const idx = set.findIndex((entry) => entry.member === member);
      if (idx !== -1) {
        set.splice(idx, 1);
      }
    }

    scoreMap.set(member, score);

    // Binary search insertion to maintain descending order
    let low = 0;
    let high = set.length;

    while (low < high) {
      const mid = (low + high) >>> 1;
      if (set[mid].score < score) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }

    set.splice(low, 0, { member, score });
  }

  static getRank(key: string, member: string): number | null {
    const set = this.sets.get(key);
    if (!set) return null;

    const idx = set.findIndex((entry) => entry.member === member);
    return idx !== -1 ? idx + 1 : null;
  }

  static getScore(key: string, member: string): number | null {
    const scoreMap = this.scoreMaps.get(key);
    if (!scoreMap || !scoreMap.has(member)) return null;
    return scoreMap.get(member)!;
  }

  static getRange(key: string, start: number, stop: number): RankedMember[] {
    const set = this.sets.get(key);
    if (!set) return [];

    const effectiveStop = stop === -1 ? set.length : stop + 1;
    return set.slice(start, effectiveStop);
  }

  static getCard(key: string): number {
    const set = this.sets.get(key);
    return set ? set.length : 0;
  }

  static clear(key?: string): void {
    if (key) {
      this.sets.delete(key);
      this.scoreMaps.delete(key);
    } else {
      this.sets.clear();
      this.scoreMaps.clear();
    }
  }
}
