import React from 'react';
import Auth from '../../utils/auth';

const Work = () => {

  const loggedIn = Auth.loggedIn();

  const posts = [
    { 
        title: 'The Key Things to Know Before Switching Careers into Tech',
        image: 'image4',
        description: 'Imposter syndrome is real. Be aware of the inner critical thoughts that cause you to doubt your abilities and potential. Make a list of all of your accomplishments within the last year or two. Create a brag list of all the things you are proud of within your career. Re-read it as many times as you need to whenever you start to question yourself. Your brag list will serve as real, actual evidence of what you can do and have done.',
        url:'https://girlboss.com/blogs/read/career-change-tech-what-to-know',
        source: 'girlboss',
    },
    { 
      title:'3 Strategies for Sparking an Innovative Idea',
      image: 'image3',
      description: "You see, true innovation is simply adding value somewhere where it didn't exist before. If you have a product that meets a unique need, however mundane, it is innovative in its own way. And it's innovative to a certain set of people. Therein lies the key, it's about the people!",
      url: 'https://sherocommerce.com/3-strategies-for-sparking-an-innovative-idea/',
      source:'shero',
    },
    { 
      title: '“Following Your Passion Is B.S.” and Other Advice for the Class of 2020',
      image: 'image1',
      description: "My experience after graduating from college in 2007 was much more like riding in a raft, grabbing on to the opportunities within reach. The ones that were interesting, I held on to and used to pull myself along. The ones that were miserable, I used to launch myself in a different direction. As I've floated down the river, I've collected a ton of ideas and experiences that I carry with me and make me very good at my job, even if it is a million miles away from where I started.",
      url:'https://www.cosmopolitan.com/career/a32019248/advice-class-2020-graduation-pandemic/',
      source:'cosmopolitan',
    },
    { 
      title: 'The Career Lessons From Anna Wintour',
      image: 'image2',
      description: "Everyone should be sacked at least once in their career, because 'perfection' doesn't exist. It's important to have setbacks, because that is the reality of life",
      url:'https://arte8lusso.net/fashion/annawintour/',
      source:'fortune',
    }
    ];

  return (
    <main>
      <div>
        {loggedIn && (
          <div class='work-container'>
            {posts.map((post)=> (
              <div class='post-container'>
                <img src={require(`../../assets/${post.image}.png`).default} alt='post' class='work-img'/>
                <h2>{post.title}</h2>
                <h3>{post.source}</h3>
              <h4 class='justify'> <span class='quotes'>"</span>{post.description}<span class='quotes'>"</span></h4>
              </div>
            ))}
          </div>
        )}
        {!loggedIn && (
          <>
          <div class='work-container'>
            {posts.map((post)=> (
              <div class='post-container'>
              <a href={post.url} target="_blank" rel="noreferrer" ><img src={require(`../../assets/${post.image}.png`).default} alt='post' class='work-img'/></a>
              <h2><a href={post.url} target="_blank" rel="noreferrer">{post.title}</a></h2>
              <h3>{post.source}</h3>
              <h4 class='justify'> <span class='quotes'>"</span>{post.description}<span class='quotes'>"</span></h4>
            </div>
            ))}
          </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Work;
