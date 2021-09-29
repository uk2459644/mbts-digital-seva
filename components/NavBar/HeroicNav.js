export default function HeroicNav() {

    return (
        <div>
            <div className="bg-gray-200 sm:flex sm:h-screen sm:items-center">
  <div className="max-w-screen-md mx-auto text-center sm:text-left sm:shadow sm:rounded sm:overflow-hidden">
    <div className="p-10 bg-white">
      <h1 className="text-teal-500 font-bold text-2xl mb-4">Join our community</h1>
      <h2 className="text-green-400 font-bold text-lg mb-4">30-day, hassle free money back guarantee</h2>
      <p className="text-gray-500 font-semibold">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
    </div>
    <div className="sm:flex">
      <section className="p-10 bg-gray-900 text-white sm:w-1/2">
        <div className="max-w-xs mx-auto">
          <h2 className="mb-5 text-xl font-bold">Monthly subscription</h2>
          <div className="mb-2 leading-none">
            <span className="inline-block align-middle text-4xl font-bold mr-2">$29</span>
            <span className="inline-block align-middle font-semibold text-normal text-teal-300">per month</span>
          </div>
          <p className="mb-8 font-semibold">Full access for less than $1 a day</p>
          <button className="w-full py-3 bg-yellow-400 text-yellow-800 font-bold shadow rounded hover:bg-yellow-500">Sign Up</button>
        </div>
      </section>
      <section className="sm:w-1/2 p-10 bg-gray-500 text-white">
        <div className="max-w-xs mx-auto">
          <h2 className="mb-5 text-xl font-bold">Why us</h2>
          <ul className="text-sm font-semibold text-gray-100">
            <li><a href="#" className="hover:text-yellow-300">Tutorials by industry experts</a></li>
            <li><a href="#" className="hover:text-yellow-300">Peer and experts code review</a></li>
            <li><a href="#" className="hover:text-yellow-300">Coding exercises</a></li>
            <li><a href="#" className="hover:text-yellow-300">Access to our Github repos</a></li>
            <li><a href="#" className="hover:text-yellow-300">Community forum</a></li>
            <li><a href="#" className="hover:text-yellow-300">Flashcard decks</a></li>
            <li><a href="#" className="hover:text-yellow-300">New videos every week</a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</div>
            </div>

  )
}