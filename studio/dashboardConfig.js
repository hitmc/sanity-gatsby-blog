export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d8e80c502b0c8fc580de7ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-stdnfjc1',
                  apiId: '627b0012-c50b-4ab9-9fcf-0a6508f3010c'
                },
                {
                  buildHookId: '5d8e80c5777894ce017b770f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-myogbrw3',
                  apiId: '4fd0847e-9c05-41e8-ba87-fbccaea7eb62'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hitmc/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-myogbrw3.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
