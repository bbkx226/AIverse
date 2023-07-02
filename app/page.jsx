import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            <span className="fade-in">
              <span className="fade">B</span>
              <span className="fade">r</span>
              <span className="fade">a</span>
              <span className="fade">n</span>
              <span className="fade">d</span>
              <span className="fade">o</span>
              <span className="fade">n</span>
              <span className="fade">G</span>
              <span className="fade">P</span>
              <span className="fade">T</span>
            </span>
            <br className="max-md:hidden" />
            <span className="galaxy_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Introducing AI-verse: A revolutionary open-source AI prompting tool built for the contemporary era. 
            Experience unprecedented levels of creativity as AIverse enables you to explore, generate, and distribute 
            a wide range of captivating prompts.
        </p>
        <Feed />
    </section>
  )
}

export default Home