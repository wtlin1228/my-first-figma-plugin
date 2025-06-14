figma.showUI(__html__);
figma.loadAllPagesAsync();

figma.ui.onmessage = () => {
  const postComponentSet = figma.root.findOne((node) => {
    return node.type === "COMPONENT_SET" && node.name === "post";
  }) as ComponentSetNode;

  const { defaultVariant } = postComponentSet;
  const defaultDark = postComponentSet.findOne(
    (node) =>
      node.type === "COMPONENT" && node.name === "Image=none, Dark mode=true"
  ) as ComponentNode;

  defaultVariant.createInstance();
  defaultDark.createInstance();
};
