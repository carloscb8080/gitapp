export const CardPost = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl">
      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-indigo-300">The Coldest Sunset</div>
        <div className="mb-2">
          <span className="inline-block bg-indigo-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2">
            #photography
          </span>
          <span className="inline-block bg-indigo-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-50 mr-2">
            #travel
          </span>
          <span className="inline-block bg-indigo-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-50">
            #winter
          </span>
        </div>
        <p className=" text-base text-indigo-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
          eaque, exercitationem praesentium nihil.
        </p>

        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://tailwindcss.com/img/jonathan.jpg"
              alt="Avatar of Jonathan Reinink"
            />
            <div className="text-sm">
              <p className="text-gray-50 leading-none">Jonathan Reinink</p>
              <p className="text-gray-500">Aug 18</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-50 leading-none">Comments</p>
              <p className="text-gray-50 font-bold text-center">0</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-4">
          <button className="hover:text-indigo-700 text-indigo-600 font-bold py-2 px-4 rounded-lg">Like</button>
          <button className="hover:text-indigo-700 text-indigo-600 font-bold py-2 px-4 rounded-lg ">Comment</button>
          <button className="hover:text-indigo-700 text-indigo-600 font-bold py-2 px-4 rounded-lg ">Share</button>
        </div>
      </div>
    </div>
  );
};
