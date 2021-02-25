export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6037b1da55b01926356987c3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-trrc3232',
                  apiId: 'a78f8ea1-5688-432f-a36e-b636bf035569'
                },
                {
                  buildHookId: '6037b1db7ce74d29e79dc8b5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-aiijxivd',
                  apiId: '8aa3b4f9-e246-4f3b-9390-2a504dd355b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/derrickmehaffy/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-aiijxivd.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
