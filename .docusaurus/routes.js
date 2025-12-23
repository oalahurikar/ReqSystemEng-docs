import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ReqSystemEng-docs/blog',
    component: ComponentCreator('/ReqSystemEng-docs/blog', 'eaf'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/archive',
    component: ComponentCreator('/ReqSystemEng-docs/blog/archive', 'c6e'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/authors',
    component: ComponentCreator('/ReqSystemEng-docs/blog/authors', '1fd'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/ReqSystemEng-docs/blog/authors/all-sebastien-lorber-articles', '6b0'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/authors/yangshun',
    component: ComponentCreator('/ReqSystemEng-docs/blog/authors/yangshun', 'bf0'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/first-blog-post',
    component: ComponentCreator('/ReqSystemEng-docs/blog/first-blog-post', 'bba'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/long-blog-post',
    component: ComponentCreator('/ReqSystemEng-docs/blog/long-blog-post', '004'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/mdx-blog-post',
    component: ComponentCreator('/ReqSystemEng-docs/blog/mdx-blog-post', '9bb'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/tags',
    component: ComponentCreator('/ReqSystemEng-docs/blog/tags', 'a43'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/tags/docusaurus',
    component: ComponentCreator('/ReqSystemEng-docs/blog/tags/docusaurus', 'fbc'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/tags/facebook',
    component: ComponentCreator('/ReqSystemEng-docs/blog/tags/facebook', '226'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/tags/hello',
    component: ComponentCreator('/ReqSystemEng-docs/blog/tags/hello', 'a57'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/tags/hola',
    component: ComponentCreator('/ReqSystemEng-docs/blog/tags/hola', '4af'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/blog/welcome',
    component: ComponentCreator('/ReqSystemEng-docs/blog/welcome', '1ed'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/markdown-page',
    component: ComponentCreator('/ReqSystemEng-docs/markdown-page', '6ee'),
    exact: true
  },
  {
    path: '/ReqSystemEng-docs/docs',
    component: ComponentCreator('/ReqSystemEng-docs/docs', '34d'),
    routes: [
      {
        path: '/ReqSystemEng-docs/docs',
        component: ComponentCreator('/ReqSystemEng-docs/docs', '5db'),
        routes: [
          {
            path: '/ReqSystemEng-docs/docs',
            component: ComponentCreator('/ReqSystemEng-docs/docs', '131'),
            routes: [
              {
                path: '/ReqSystemEng-docs/docs/',
                component: ComponentCreator('/ReqSystemEng-docs/docs/', 'ff5'),
                exact: true
              },
              {
                path: '/ReqSystemEng-docs/docs/advanced/code-integration',
                component: ComponentCreator('/ReqSystemEng-docs/docs/advanced/code-integration', '5d0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/advanced/legacy-import',
                component: ComponentCreator('/ReqSystemEng-docs/docs/advanced/legacy-import', 'f79'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/advanced/troubleshooting',
                component: ComponentCreator('/ReqSystemEng-docs/docs/advanced/troubleshooting', 'a3c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/getting-started/introduction',
                component: ComponentCreator('/ReqSystemEng-docs/docs/getting-started/introduction', '331'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/getting-started/quick-start',
                component: ComponentCreator('/ReqSystemEng-docs/docs/getting-started/quick-start', 'd63'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/getting-started/ui-tour',
                component: ComponentCreator('/ReqSystemEng-docs/docs/getting-started/ui-tour', '843'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/guides/constraint-management',
                component: ComponentCreator('/ReqSystemEng-docs/docs/guides/constraint-management', 'e50'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/guides/creating-requirements',
                component: ComponentCreator('/ReqSystemEng-docs/docs/guides/creating-requirements', '270'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/guides/defining-context',
                component: ComponentCreator('/ReqSystemEng-docs/docs/guides/defining-context', '991'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/guides/error-guide',
                component: ComponentCreator('/ReqSystemEng-docs/docs/guides/error-guide', '4b5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/intro',
                component: ComponentCreator('/ReqSystemEng-docs/docs/intro', 'f93'),
                exact: true
              },
              {
                path: '/ReqSystemEng-docs/docs/reference/edge-types',
                component: ComponentCreator('/ReqSystemEng-docs/docs/reference/edge-types', '38c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/reference/node-types',
                component: ComponentCreator('/ReqSystemEng-docs/docs/reference/node-types', 'ba8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/reference/search-guide',
                component: ComponentCreator('/ReqSystemEng-docs/docs/reference/search-guide', '376'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/scenarios/drafting-first-req',
                component: ComponentCreator('/ReqSystemEng-docs/docs/scenarios/drafting-first-req', 'e89'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/scenarios/handling-conflicts',
                component: ComponentCreator('/ReqSystemEng-docs/docs/scenarios/handling-conflicts', 'c28'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/ReqSystemEng-docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/ReqSystemEng-docs/docs/tutorial-basics/congratulations', '7de'),
                exact: true
              },
              {
                path: '/ReqSystemEng-docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/ReqSystemEng-docs/docs/tutorial-basics/create-a-blog-post', 'bc7'),
                exact: true
              },
              {
                path: '/ReqSystemEng-docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/ReqSystemEng-docs/docs/tutorial-basics/create-a-document', 'ecf'),
                exact: true
              },
              {
                path: '/ReqSystemEng-docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/ReqSystemEng-docs/docs/tutorial-basics/create-a-page', '08a'),
                exact: true
              },
              {
                path: '/ReqSystemEng-docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/ReqSystemEng-docs/docs/tutorial-basics/deploy-your-site', '8e6'),
                exact: true
              },
              {
                path: '/ReqSystemEng-docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/ReqSystemEng-docs/docs/tutorial-basics/markdown-features', 'f35'),
                exact: true
              },
              {
                path: '/ReqSystemEng-docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/ReqSystemEng-docs/docs/tutorial-extras/manage-docs-versions', 'bc5'),
                exact: true
              },
              {
                path: '/ReqSystemEng-docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/ReqSystemEng-docs/docs/tutorial-extras/translate-your-site', '34f'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ReqSystemEng-docs/',
    component: ComponentCreator('/ReqSystemEng-docs/', '836'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
