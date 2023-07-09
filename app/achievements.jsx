const achievements = () => {
  return (
    <div className="gradient py-12">
      <div className="lg:max-w-screen-md xl:max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
        <div className="block mx-auto py-6 w-40 border border-gray-200 rounded-lg text-white">
          <h5 class="text-2xl font-bold tracking-tight">02</h5>
          <p class="font-light">Awards</p>
        </div>
        <div className="block mx-auto py-6 w-40 border border-gray-200 rounded-lg text-white">
          <h5 class="text-2xl font-bold tracking-tight">04</h5>
          <p class="font-light">Projects</p>
        </div>
        <div className="block mx-auto py-6 w-40 border border-gray-200 rounded-lg text-white">
          <h5 class="text-2xl font-bold tracking-tight">02</h5>
          <p class="font-light">Certificates</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default achievements