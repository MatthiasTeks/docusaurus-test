/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Outils',
      items: ['doc/create-a-document'],
    },
    {
      type: 'category',
      label: 'Guides',
      items: ['doc/guides'],
    },
    {
      type: 'category',
      label: 'Organisation',
      items: ['doc/organization'],
    },
  ],
  resourceSidebar: [
    {
      type: 'category',
      label: 'Guides',
      items: ['resources/manage-docs-versions'],
    },
  ],
};

module.exports = sidebars;
