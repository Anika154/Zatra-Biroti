import React from 'react';
import blog1 from '../../../image/blog1.jpg';
import blog2 from '../../../image/blog2.jpg';
import blog3 from '../../../image/blog3.jpg';


const Blog = () => {
    return (
        <div className="mt-20">
            <h5 className="text-red-700 font-mono font-extrabold text-xl"> FROM OUR BLOG</h5>
            <h2 className="text-blue-900 font-extrabold text-5xl p-4">OUR RECENT POST</h2>
            <small className="text-base font-mono text-center">In a good year, I would be traveling to over 10 countries, spending at least 2 weeks in each country, and <br />spending months exploring all the interesting things this world has to offer.</small>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-3">
                <div class="col">
                    <div class="card h-100">
                        <img src={blog1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title text-left text-blue-900 font-bold font-mono text-2xl">Life is a beautiful journey not a destination</h3>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted text-base">Demoteam | August 17,2021 | No Comment</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={blog2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title text-left text-blue-900 font-bold  font-mono text-2xl ">Take only memories,leave only footprints</h3>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted text-base">Alisha | July 18,2021 | No Comment</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 rounded-md">
                        <img src={blog3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title text-left text-blue-900 font-bold font-monos text-2xl">Journeys are best measured in new friends</h3>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted text-base">Sulaiman | October 18,2021 | No Comment</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;