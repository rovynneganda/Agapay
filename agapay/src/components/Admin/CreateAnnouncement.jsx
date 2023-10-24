import React from 'react'

const CreateAnnouncement = () => {
  return (
  <>
      <section className="bg-accent min-h-screen sm:my-0 my-10">
    <div className="p-4 sm:ml-64">
    <h1 className='font-inter text-3xl mt-3'>Announcement</h1>
        <hr className='border-primary mt-3 mb-3' />
  <div class=" py-5 px-4 mx-auto bg-white rounded-xl font-inter">
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 p-5">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-semibold text-black ">Title</label>
                  <input type="text" name="name" id="name" class="bg-subtlegray border border-gray/30 text-black text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-none block w-full p-2.5" required=""/>
              </div>
              <div>
                  <label for="category" class="block mb-2 text-sm font-semibold text-black ">Category</label>
                  <select id="category" class="bg-subtlegray border border-gray/30 text-black text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-none block w-full p-2.5">
                      <option selected="">Select category</option>
                      <option value="Flood">Flood</option>
                      <option value="Earthquake">Earthquake</option>
                      <option value="Vehicular Accident">Vehicular Accident</option>
                      <option value="Fire">Fire</option>
                  </select>
              </div>
              <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-semibold text-black ">Description</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-black bg-subtlegray rounded-lg border border-gray/30 focus:ring-primary focus:outline-none focus:border-primary" ></textarea>
              </div>
          </div>
          <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-semibold text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary focus:outline-none hover:bg-primarydark">
              Post
          </button>
      </form>
  </div>
        </div>
        </section>
  </>
  )
}

export default CreateAnnouncement