export default [
    {
        name:'Blog title',
        desc:'An AI tool that generate blog title depends on your blog information',
        category:'blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4693/4693065.png',
        aiPromt:'Give me 5 blog topic idea in bullet wise only based on give niche & outline give me result',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outine',
                field:'textarea',
                name:'outline',
            }
    ]
    },

    {
        name: 'Blog Content Generator',
        desc: 'An AI tool that generates blog titles based on your blog information',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4359/4359733.png', // Updated icon
        aiPromt: 'Give me 5 blog topic ideas in bullet format based on the given niche & outline.',
        slug: 'blog-content-generator',
        form: [
          { label: 'Enter your blog topic', field: 'input', name: 'topic', required: true },
          { label: 'Enter blog outline', field: 'textarea', name: 'outline' }
        ]
    },
    
        {
          name: 'Product Description Generator',
          desc: 'An AI tool that generates compelling product descriptions based on product details',
          category: 'ecommerce',
          icon: 'https://cdn-icons-png.flaticon.com/128/4229/4229580.png',
          aiPromt: 'Generate a concise and engaging product description based on the product name and features provided.',
          slug: 'product-description-generator',
          form: [
            { label: 'Enter product name', field: 'input', name: 'product_name', required: true },
            { label: 'Enter key product features', field: 'textarea', name: 'features' }
          ]
        },
        {
          name: 'Social Media Caption Creator',
          desc: 'An AI tool that helps you generate catchy social media captions',
          category: 'social_media',
          icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
          aiPromt: 'Generate 5 engaging social media captions based on the event or product provided.',
          slug: 'social-media-caption-creator',
          form: [
            { label: 'Enter post/event description', field: 'textarea', name: 'description', required: true }
          ]
        },
        {
          name: 'Email Subject Line Generator',
          desc: 'An AI tool that helps you create effective email subject lines',
          category: 'email',
          icon: 'https://cdn-icons-png.flaticon.com/128/732/732200.png',
          aiPromt: 'Generate 5 compelling email subject lines based on the provided email content.',
          slug: 'email-subject-line-generator',
          form: [
            { label: 'Enter email content', field: 'textarea', name: 'email_content', required: true }
          ]
        },
        {
          name: 'SEO Meta Description Generator',
          desc: 'An AI tool for generating SEO-friendly meta descriptions',
          category: 'seo',
          icon: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
          aiPromt: 'Generate an SEO-optimized meta description based on the provided page content and keywords.',
          slug: 'seo-meta-description-generator',
          form: [
            { label: 'Enter page content', field: 'textarea', name: 'page_content', required: true },
            { label: 'Enter keywords', field: 'input', name: 'keywords', required: true }
          ]
        },
        {
          name: 'Ad Copy Generator',
          desc: 'An AI tool for writing effective advertising copy',
          category: 'advertising',
          icon: 'https://cdn-icons-png.flaticon.com/128/1040/1040221.png',
          aiPromt: 'Generate 3 ad copy ideas based on the product/service details provided.',
          slug: 'ad-copy-generator',
          form: [
            { label: 'Enter product/service details', field: 'textarea', name: 'product_details', required: true }
          ]
        },
        {
          name: 'Resume Summary Generator',
          desc: 'An AI tool for creating professional resume summaries',
          category: 'resume',
          icon: 'https://cdn-icons-png.flaticon.com/128/1570/1570890.png',
          aiPromt: 'Generate a professional resume summary based on the provided job title and experience.',
          slug: 'resume-summary-generator',
          form: [
            { label: 'Enter job title', field: 'input', name: 'job_title', required: true },
            { label: 'Enter key experience/skills', field: 'textarea', name: 'experience', required: true }
          ]
        },
        {
          name: 'Business Name Generator',
          desc: 'An AI tool that helps you generate unique business name ideas',
          category: 'business',
          icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077012.png',
          aiPromt: 'Generate 5 unique business name ideas based on the provided industry and keywords.',
          slug: 'business-name-generator',
          form: [
            { label: 'Enter industry type', field: 'input', name: 'industry', required: true },
            { label: 'Enter keywords', field: 'input', name: 'keywords', required: true }
          ]
        },
        {
          name: 'Tagline Generator',
          desc: 'An AI tool that creates catchy and memorable taglines for your brand',
          category: 'branding',
          icon: 'https://cdn-icons-png.flaticon.com/128/1006/1006556.png',
          aiPromt: 'Generate 5 catchy taglines based on the provided brand name and keywords.',
          slug: 'tagline-generator',
          form: [
            { label: 'Enter brand name', field: 'input', name: 'brand_name', required: true },
            { label: 'Enter keywords', field: 'input', name: 'keywords', required: true }
          ]
        },
      
        {
          name: 'Hashtag Generator',
          desc: 'An AI tool for generating relevant hashtags for your social media posts',
          category: 'social_media',
          icon: 'https://cdn-icons-png.flaticon.com/128/1946/1946553.png',
          aiPromt: 'Generate 5 trending hashtags based on the provided post description and keywords.',
          slug: 'hashtag-generator',
          form: [
            { label: 'Enter post description', field: 'textarea', name: 'post_description', required: true },
            { label: 'Enter relevant keywords', field: 'input', name: 'keywords', required: true }
          ]
        },
      
        {
          name: 'AI Chatbot Script Generator',
          desc: 'An AI tool for creating chatbot conversation scripts for customer support',
          category: 'chatbot',
          icon: 'https://cdn-icons-png.flaticon.com/128/1041/1041916.png',
          aiPromt: 'Generate a chatbot script with a greeting, FAQ responses, and closing based on the provided industry and common questions.',
          slug: 'chatbot-script-generator',
          form: [
            { label: 'Enter industry type', field: 'input', name: 'industry', required: true },
            { label: 'Enter common questions', field: 'textarea', name: 'questions' }
          ]
        },
      
        {
          name: 'Press Release Generator',
          desc: 'An AI tool that helps create professional press releases for your business',
          category: 'business',
          icon: 'https://cdn-icons-png.flaticon.com/128/1828/1828966.png',
          aiPromt: 'Generate a press release based on the provided event, product launch, or company news.',
          slug: 'press-release-generator',
          form: [
            { label: 'Enter press release topic', field: 'input', name: 'topic', required: true },
            { label: 'Enter key details', field: 'textarea', name: 'details', required: true }
          ]
        },
      
        {
          name: 'Slogan Generator',
          desc: 'An AI tool that generates memorable slogans for your brand',
          category: 'branding',
          icon: 'https://cdn-icons-png.flaticon.com/128/2991/2991158.png',
          aiPromt: 'Generate 5 memorable slogans based on the provided company name and industry.',
          slug: 'slogan-generator',
          form: [
            { label: 'Enter company name', field: 'input', name: 'company_name', required: true },
            { label: 'Enter industry', field: 'input', name: 'industry', required: true }
          ]
        },
        {
          name: 'Code Debugger',
          desc: 'An AI tool to help students debug code by providing explanations and suggestions',
          category: 'coding',
          icon: 'https://cdn-icons-png.flaticon.com/128/3771/3771620.png',
          aiPromt: 'Provide step-by-step debugging suggestions for the following code issue.',
          slug: 'code-debugger',
          form: [
            { label: 'Enter your code', field: 'textarea', name: 'code', required: true },
            { label: 'Describe the issue', field: 'textarea', name: 'issue', required: true }
          ]
        },
      
        {
          name: 'Math Problem Solver',
          desc: 'An AI tool that helps solve complex math problems with step-by-step explanations',
          category: 'math',
          icon: 'https://cdn-icons-png.flaticon.com/128/1046/1046172.png',
          aiPromt: 'Solve the following math problem step by step, including all intermediate steps.',
          slug: 'math-problem-solver',
          form: [
            { label: 'Enter math problem', field: 'textarea', name: 'problem', required: true }
          ]
        },
    
      
        {
          name: 'Resume Builder for Engineers',
          desc: 'An AI tool that helps engineering students craft professional resumes',
          category: 'career',
          icon: 'https://cdn-icons-png.flaticon.com/128/1161/1161388.png',
          aiPromt: 'Generate a professional engineering resume summary based on the provided experience and skills.',
          slug: 'resume-builder-engineers',
          form: [
            { label: 'Enter your name', field: 'input', name: 'name', required: true },
            { label: 'Enter key skills and experience', field: 'textarea', name: 'skills', required: true }
          ]
        },
      
        {
          name: 'Time Management Planner',
          desc: 'An AI tool to help students plan their study schedule efficiently',
          category: 'productivity',
          icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593160.png',
          aiPromt: 'Create a time management plan based on the provided deadlines and tasks.',
          slug: 'time-management-planner',
          form: [
            { label: 'Enter your tasks and deadlines', field: 'textarea', name: 'tasks', required: true }
          ]
        },

        {
          name: 'Presentation Slide Generator',
          desc: 'An AI tool that creates presentation slides based on provided content',
          category: 'presentation',
          icon: 'https://cdn-icons-png.flaticon.com/128/2248/2248451.png',
          aiPromt: 'Generate presentation slides with headings, bullet points, and summaries based on the provided content.',
          slug: 'presentation-slide-generator',
          form: [
            { label: 'Enter content for slides', field: 'textarea', name: 'content', required: true }
          ]
        },
      
        {
          name: 'Technical Report Generator',
          desc: 'An AI tool for writing technical reports based on data and analysis provided',
          category: 'writing',
          icon: 'https://cdn-icons-png.flaticon.com/128/2376/2376359.png',
          aiPromt: 'Generate a professional technical report based on the following data and analysis.',
          slug: 'technical-report-generator',
          form: [
            { label: 'Enter report data/analysis', field: 'textarea', name: 'data', required: true }
          ]
        },

        {
          name: 'Research Paper Generator',
          desc: 'An AI tool that helps generate structured research papers based on given topics.',
          category: 'writing',
          icon: 'https://cdn-icons-png.flaticon.com/128/2854/2854141.png',
          aiPromt: 'Generate a structured research paper outline and content based on the provided topic and keywords.',
          slug: 'research-paper-generator',
          form: [
              { label: 'Enter research topic', field: 'input', name: 'topic', required: true },
              { label: 'Enter keywords for research', field: 'textarea', name: 'keywords', required: true }
          ]
      },
      
      {
        name: 'Project Status Report Generator',
        desc: 'An AI tool for generating comprehensive project status reports.',
        category: 'writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2672/2672081.png',
        aiPromt: 'Generate a detailed project status report based on the provided project updates and metrics.',
        slug: 'project-status-report-generator',
        form: [
            { label: 'Enter project updates', field: 'textarea', name: 'updates', required: true },
            { label: 'Enter key metrics and performance indicators', field: 'textarea', name: 'metrics', required: true }
        ]
    }
    
]