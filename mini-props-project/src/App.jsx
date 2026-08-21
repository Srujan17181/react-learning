import React from 'react'
import Card from './components/Card'

const App = () => {
  const companies = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    name: "Google",
    post: "Software Engineer",
    time: "5 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    money: "$120/hour",
    location: "Bangalore, India",
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/027/127/592/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
    name: "Microsoft",
    post: "Frontend Developer",
    time: "10 weeks ago",
    tag1: "Full-time",
    tag2: "Junior",
    money: "$85/hour",
    location: "Hyderabad, India",
  },
  {
    logo: "https://t4.ftcdn.net/jpg/02/94/54/07/360_F_294540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg",
    name: "Amazon",
    post: "Backend Engineer",
    time: "2 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    money: "$110/hour",
    location: "Bangalore, India",
  },
  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/meta.svg",
    name: "Meta",
    post: "React Developer",
    time: "1 week ago",
    tag1: "Full-time",
    tag2: "Mid-level",
    money: "$105/hour",
    location: "Mumbai, India",
  },
  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/apple.svg",
    name: "Apple",
    post: "iOS Software Engineer",
    time: "3 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    money: "$125/hour",
    location: "Bangalore, India",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Netflix_Logomark.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    name: "Netflix",
    post: "Full Stack Engineer",
    time: "2 weeks ago",
    tag1: "Full-time",
    tag2: "Senior",
    money: "$130/hour",
    location: "Mumbai, India",
  },
  {
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/nvidia.svg",
    name: "NVIDIA",
    post: "Machine Learning Engineer",
    time: "4 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    money: "$115/hour",
    location: "Pune, India",
  },
  {
    logo: "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-414595314.jpg",
    name: "OpenAI",
    post: "AI Software Engineer",
    time: "6 days ago",
    tag1: "Full-time",
    tag2: "Senior",
    money: "$140/hour",
    location: "Bangalore, India",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWNe659QmBg-pJ4tpf15xrL9roKYuY3mdyKMsp3Sipi9qUYTg76rpoKMd&s=10",
    name: "Adobe",
    post: "Frontend Engineer",
    time: "3 weeks ago",
    tag1: "Part-time",
    tag2: "Junior",
    money: "$70/hour",
    location: "Noida, India",
  },
  {
    logo: "https://thumbs.dreamstime.com/b/salesforce-logo-icon-vector-logos-logo-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-emblem-wallpaper-background-208332853.jpg",
    name: "Salesforce",
    post: "Backend Developer",
    time: "1 week ago",
    tag1: "Full-time",
    tag2: "Mid-level",
    money: "$90/hour",
    location: "Hyderabad, India",
  },
];
  return (
    <div className='Parent'>
      {companies.map((user)=> <Card company={user.name} 
      post={user.post} logo={user.logo} time={user.time}
      tag1={user.tag1} tag2={user.tag2} 
      money={user.money} 
      location={user.location}/>)}
    </div>
  )
}

export default App
