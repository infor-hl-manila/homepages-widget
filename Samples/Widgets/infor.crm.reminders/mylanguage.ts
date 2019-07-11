import { ILanguage } from "lime";

export interface IMyLanguage extends ILanguage {
  participants?: string;
  buttonLabel?: string;
  titleHeaderSingular?: string;
  titleHeaderPlural?: string;
  today?: string;
  thisWeek?: string;
  pastReminders?: string;
  completedStateMessage?: string;
  notes?: string;
  workspaceTitle?: string;
  launchToastTitle?: string;
  launchToastMessage?: string;
  crmLinkText?: string;
  availableText?: string;
}
