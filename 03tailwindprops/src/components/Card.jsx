import React from 'react';

function Card({name='Sohel Ahmed', title='Web Developer'}) {
  // const {name, title} = props
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&q=80" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ut officiis quidem! Optio, soluta quae atque ducimus nobis possimus aut, dicta repellendus, enim molestiae esse. Natus fugiat fugit tenetur nisi.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {name}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
            {title}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;