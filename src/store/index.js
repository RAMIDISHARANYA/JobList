import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs:[ 
      {
        id:1,
        title: 'Senior Frontend Developer',
        company: 'Wipro',
        posted: '1 month ago',
        type: 'Full Time',
        location: 'India',
        isNew:true,
        featured:true,
        categories:['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
        profilePicURL:'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/05/05/Photos/Processed/wiprologo-kXmF--621x414@LiveMint.jpg'
      },
      {
        id:2,
        title: 'Senior Backend Developer',
        company: 'Amazon',
        posted: '2month ago',
        type: 'Full Time',
        location: 'Remote',
        isNew:true,
        featured:true,
        categories:['Backend', 'Senior', 'Java', 'JavaScript'],
        profilePicURL:'https://www.groupe-casino.fr/wp-content/uploads/2018/05/Amazon.jpg'
      },
      {
        id:3,
        title: 'Junior Frontend Developer',
        company: 'Wipro',
        posted: '1 week ago',
        type: 'Part Time',
        location: 'USA',
        isNew:true,
        featured:true,
        categories:['Frontend', 'Junior', 'HTML', 'CSS', 'JavaScript'],
        profilePicURL:'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/05/05/Photos/Processed/wiprologo-kXmF--621x414@LiveMint.jpg'
      },
      {
        id:4,
        title: 'FullStack Developer',
        company: 'WaveForm',
        posted: '2 weeks ago',
        type: 'Part Time',
        location: 'Remote',
        isNew:false,
        featured:false,
        categories:['Fullstack', 'Midweight', 'Python', 'React'],
        profilePicURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIq88jj8DfDUkP4wAK_Dsukz3uCJ3dOPy0w&usqp=CAU'
      },
      {
        id:5,
        title: 'FullStack Developer',
        company: 'Apriside',
        posted: '1 day ago',
        type: 'Part Time',
        location: 'Remote',
        isNew:false,
        featured:false,
        categories:['Fullstack', 'Midweight', 'Sass', 'JavaScript', 'Ruby'],
        profilePicURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0bQE4HOQ2-0EnQUDwxgQcwFis11a-xkR1g&usqp=CAU'
      },
      {
        id:6,
        title: 'Accountant',
        company: 'Infosys',
        posted: '2 weeks ago',
        type: 'Part Time',
        location: 'Remote',
        isNew:false,
        featured:false,
        categories:['Business', 'Accounts', 'MBA', 'HR'],
        profilePicURL:'https://pbs.twimg.com/profile_images/1278579410795261952/EmaLJo-9_400x400.jpg'
      },
    ],
    search: [],
  },
  mutations: {
    addSearch(state, payload) {
      console.log(state);
      console.log(payload);
       state.search=payload;
    }
  },
  actions: {
    addSearch(context, payload)
    {
      console.log(context);
      console.log(payload);
      context.commit('addSearch', payload);
    }
  },
  getters: {
    searchdata(state) {
      return state.search;
    },
    filtereJobs(state){
      if (state.search.length===0) {
        return state.jobs;
      }
      else {
        return state.jobs.filter(job=> state.search.every(jobholder=> job.categories.includes(jobholder)));
      }
      // console.log(state);
    },
    categories(state) {
      let jobholders = [];
      state.jobs.forEach(job=>{
      jobholders.push(...job.categories);
        // jobholders= [...new Set jobholders.push(...job.categories);
      })
      // Let uniquecats = [...new Set(cats)];
      // return uniquecats;
      return [...new Set(jobholders)];
    }

  },
  modules: {
  }
});

