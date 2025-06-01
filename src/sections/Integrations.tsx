import Tag from "@/components/Tag";
import IntegrationsColumn from "@/components/IntegrationsColumn";

import slackIcon from "@/assets/images/slack-logo.svg";
import figmaIcon from "@/assets/images/figma-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";

export type IntegrationsType = typeof integrations;

const Integrations = () => {
  return (
    <section className="overflow-hidden px-4 py-24" id="integretions">
      <div className="container mx-auto">
        <div className="grid items-center lg:grid-cols-2 lg:gap-16">
          <div className="">
            <Tag>Integrations</Tag>
            <h2 className="mt-6 text-6xl font-medium">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Layerkit seamlessly connects with your favorite tools, making it
              easy to plug into any workflow and collaborate across platforms.
            </p>
          </div>

          <div>
            <div className="mt-8 grid h-[400px] gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:grid-cols-2 lg:mt-0 lg:h-[800px]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export default Integrations;
