import type { Post } from "./types";
import * as stopDelaying from "@/content/blog/stop-delaying-prayers";
import * as wakeUpForFajr from "@/content/blog/wake-up-for-fajr";
import * as duaForAnxiety from "@/content/blog/dua-for-anxiety";
import * as findQibla from "@/content/blog/find-qibla-direction";
import * as makeUpMissedPrayers from "@/content/blog/make-up-missed-prayers";
import * as duaBeforeSleep from "@/content/blog/dua-before-sleep";
import * as duaForForgiveness from "@/content/blog/dua-for-forgiveness";
import * as duaForParents from "@/content/blog/dua-for-parents";
import * as duaForRizq from "@/content/blog/dua-for-rizq";

/**
 * The post registry. Add a new guide by writing its content module under
 * src/content/blog/ and importing it here. No CMS, no magic globbing —
 * one explicit list, exactly what gets built.
 */
const modules = [
  stopDelaying,
  wakeUpForFajr,
  duaForAnxiety,
  findQibla,
  makeUpMissedPrayers,
  duaBeforeSleep,
  duaForForgiveness,
  duaForParents,
  duaForRizq,
];

export const posts: Post[] = modules
  .map((m) => ({ ...m.meta, Body: m.Body }))
  .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getRelated(slug: string): Post[] {
  const post = getPost(slug);
  if (!post) return [];
  return post.related
    .map((s) => getPost(s))
    .filter((p): p is Post => Boolean(p));
}
