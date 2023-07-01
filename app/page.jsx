import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            BrandonGPT-Community
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Introducing AIverse: the game-changing open-source AI prompting tool designed for the modern world. 
            Unleash your creativity like never before as AIverse empowers you to discover, create, and share a wealth 
            of captivating prompts. Harnessing the advanced capabilities of artificial intelligence, this cutting-edge 
            platform opens doors to endless inspiration.
        </p>
        <Feed />
    </section>
  )
}

export default Home