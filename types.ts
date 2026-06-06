/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  type: string;
  color: string;
  previewType: 'calculator' | 'ecommerce' | 'musicplayer';
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  skills: string[];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  tag?: string;
}
