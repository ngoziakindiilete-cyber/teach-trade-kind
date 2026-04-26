export interface Profile {
  full_name: string;
  avatar_url: string | null;
  bio: string | null;
  location: string | null;
  phone: string | null;
  profile_complete: boolean;
}

export interface SkillTeach {
  id?: string;
  skill_name: string;
  category: string;
  proficiency: string;
}

export interface SkillLearn {
  id?: string;
  skill_name: string;
  category: string;
  preferred_format: string;
}
