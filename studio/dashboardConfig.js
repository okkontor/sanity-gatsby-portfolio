export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e8dc8ca0ef8432de3ea3329',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jevngrmz',
                  apiId: '8d9f01d5-5613-45fd-95f7-cf6e6ca3d91b'
                },
                {
                  buildHookId: '5e8dc8caaba624a148b8a86d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p5fcxn94',
                  apiId: 'fad782b2-e7a9-4a71-b126-7dd167e17aad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/okkontor/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-p5fcxn94.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
