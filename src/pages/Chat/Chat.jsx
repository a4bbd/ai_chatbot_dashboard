import React from 'react';

const Chat = () => {
    return (
        <div>
            <div className='grid w-full  gap-5 grid-cols-10'>
                    <div className='bg-white  col-span-3 rounded'>
                    <div className="p-2 w-full card-header chat-search">
										<div className="">
											<div class="input-group-prepend">
												<span class="search_btn"><i class="fas fa-search"></i></span>
											</div>
											<input className='border  mt-auto' type="text" placeholder="Search" class="form-control search-chat rounded-pill" />
										</div>
					</div>
                    <p>Probably the most effective way to achieve paragraph unity is to express the central idea of the paragraph in a topic sentence.

Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.

In academic writing, the topic sentence nearly always works best at the beginning of a paragraph so that the reader knows what to expect:</p>
                    </div>


                    <div className='bg-orange-500 col-span-7'>element 2</div>
            </div>
        </div>
    );
};

export default Chat;