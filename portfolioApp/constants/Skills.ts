import { SwiftIcon } from '@/components/icons/skills/SwiftIcon';
import { JavaScriptIcon } from '@/components/icons/skills/JavaScriptIcon';
import { ReactIcon } from '@/components/icons/skills/ReactIcon';
import { PythonIcon } from '@/components/icons/skills/PythonIcon';
import { FirebaseIcon } from '@/components/icons/skills/FirebaseIcon';
import { IllustratorIcon } from '@/components/icons/skills/IllustratorIcon';
import { PhotoshopIcon } from '@/components/icons/skills/PhotoshopIcon';
import { GitIcon } from '@/components/icons/skills/GitIcon';
import { UIKitIcon } from '@/components/icons/skills/UIKitIcon';
import { TypescriptIcon } from '@/components/icons/skills/TypescriptIcon';
import { XCodeIcon } from '@/components/icons/skills/XCodeIcon';
import { VSCodeIcon } from '@/components/icons/skills/VSCodeIcon';
// ... import other icons

export type Skill = {
  name: string;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { 
        name: 'Swift',
        Icon: SwiftIcon
      },
      { 
        name: 'Javascript',
        Icon: JavaScriptIcon
      },
      { 
        name: 'Typescript',
        Icon: TypescriptIcon
      },
      { 
        name: 'Python', 
        Icon: PythonIcon
      },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { 
        name: 'SwiftUI',
        Icon: SwiftIcon
      },
      { 
        name: 'UIKit',
        Icon: UIKitIcon
      },
      { 
        name: 'Core Data',
        Icon: UIKitIcon
      },
      { 
        name: 'React',
        Icon: ReactIcon
      },
    ]
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { 
        name: 'Git', 
        Icon: GitIcon
      },
      { 
        name: 'XCode', 
        Icon: XCodeIcon
      },
      { 
        name: 'VSCode', 
        Icon: VSCodeIcon
      },
      { 
        name: 'Firebase', 
        Icon: FirebaseIcon
      },
      { 
        name: 'Adobe Photoshop', 
        Icon: PhotoshopIcon
      },
      { 
        name: 'Adobe Illustrator', 
        Icon: IllustratorIcon
      },
    ]
  }
]; 