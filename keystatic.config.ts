import { config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    site: singleton({
      label: "Site Content",
      path: "src/content/site",
      format: "json",
      schema: {
        name: fields.text({ label: "Name" }),
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
        accentColor: fields.text({ label: "Accent Color" }),
        agentUrl: fields.url({ label: "Agent URL" }),
        social: fields.object(
          {
            email: fields.text({ label: "Email" }),
            linkedin: fields.url({ label: "LinkedIn URL" }),
            github: fields.url({ label: "GitHub URL" }),
          },
          { label: "Social" }
        ),
        aboutMe: fields.array(fields.text({ label: "Paragraph", multiline: true }), {
          label: "About Me",
          itemLabel: (props) => props.value || "Paragraph",
        }),
        skills: fields.array(fields.text({ label: "Skill" }), {
          label: "Skills",
          itemLabel: (props) => props.value || "Skill",
        }),
        projects: fields.array(
          fields.object(
            {
              name: fields.text({ label: "Name" }),
              description: fields.text({ label: "Description", multiline: true }),
              link: fields.url({ label: "Link" }),
              skills: fields.array(fields.text({ label: "Skill" }), {
                label: "Project Skills",
                itemLabel: (props) => props.value || "Skill",
              }),
            },
            { label: "Project" }
          ),
          {
            label: "Projects",
            itemLabel: (props) => props.fields.name.value || "Project",
          }
        ),
        experience: fields.array(
          fields.object(
            {
              company: fields.text({ label: "Company" }),
              title: fields.text({ label: "Title" }),
              dateRange: fields.text({ label: "Date Range" }),
              bullets: fields.array(fields.text({ label: "Bullet", multiline: true }), {
                label: "Bullets",
                itemLabel: (props) => props.value || "Bullet",
              }),
            },
            { label: "Experience Item" }
          ),
          {
            label: "Experience",
            itemLabel: (props) => props.fields.company.value || "Experience",
          }
        ),
        education: fields.array(
          fields.object(
            {
              school: fields.text({ label: "School" }),
              degree: fields.text({ label: "Degree" }),
              dateRange: fields.text({ label: "Date Range" }),
              achievements: fields.array(fields.text({ label: "Achievement", multiline: true }), {
                label: "Achievements",
                itemLabel: (props) => props.value || "Achievement",
              }),
            },
            { label: "Education Item" }
          ),
          {
            label: "Education",
            itemLabel: (props) => props.fields.school.value || "Education",
          }
        ),
        featuredWork: fields.array(
          fields.object(
            {
              title: fields.text({ label: "Title" }),
              category: fields.text({ label: "Category (comma-separated)" }),
              tags: fields.array(fields.text({ label: "Tag" }), {
                label: "Tags",
                itemLabel: (props) => props.value || "Tag",
              }),
              summary: fields.text({ label: "Summary", multiline: true }),
              description: fields.text({ label: "Description", multiline: true }),
              tools: fields.array(fields.text({ label: "Tool" }), {
                label: "Tools",
                itemLabel: (props) => props.value || "Tool",
              }),
              thumbnail: fields.text({ label: "Thumbnail Path" }),
              images: fields.array(fields.text({ label: "Image Path" }), {
                label: "Images",
                itemLabel: (props) => props.value || "Image",
              }),
              video: fields.text({ label: "Video URL" }),
              link: fields.url({ label: "Project Link" }),
              size: fields.text({ label: "Card Size (large/short)" }),
            },
            { label: "Featured Work Item" }
          ),
          {
            label: "Featured Work",
            itemLabel: (props) => props.fields.title.value || "Work item",
          }
        ),
      },
    }),
  },
});
