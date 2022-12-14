import React from "react";
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './home.css'
import { useParams } from "react-router";

function Home(){
    const {name} = useParams();
    return (
      <div>
        <Navbar />

        <div class="container1">
    <div class="col-lg-8">
        <div class="panel profile-cover">
            <div class="profile-cover__img">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                <h3 class="h3">{name}</h3>
            </div>
            <div class="profile-cover__action bg--img" data-overlay="0.3">
                <button class="btn btn-rounded btn-info">
                    <i class="fa fa-plus"></i>
                    <span> Add Cover Photo</span>
                </button>
                <button class="btn btn-rounded btn-info">
                <i class="fa fa-user"></i>
                    <span> Account Info</span>
                </button>
            </div>
            <div class="profile-cover__info">
                <ul class="nav">
                    <li><strong>33</strong>Followers</li>
                    <li><strong>136</strong>Following</li>
                </ul>
            </div>
        </div>
        <div class="panel">
            <div class="panel-heading">
                <h3 class="panel-title">Activity Feed</h3>
            </div>
            <div class="panel-content panel-activity">
                <form action="#" class="panel-activity__status">
                    <textarea name="user_activity" placeholder="Share what you've been up to..." class="form-control"></textarea>
                    <div class="actions">
                        <div class="btn-group">
                            <button type="button" class="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Image">
                                <i class="fa fa-image"></i>
                            </button>
                            <button type="button" class="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Video">
                                <i class="fa fa-video-camera"></i>
                            </button>
                            <button type="button" class="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Idea">
                                <i class="fa fa-lightbulb-o"></i>
                            </button>
                            <button type="button" class="btn-link" title="" data-toggle="tooltip" data-original-title="Post an Question">
                                <i class="fa fa-question-circle-o"></i>
                            </button>
                        </div>
                        <button type="submit" class="btn btn-sm btn-rounded btn-info">
                            Post
                        </button>
                    </div>
                </form>
                <ul class="panel-activity__list">
                    <li>
                        <i class="activity__list__icon fa fa-question-circle-o"></i>
                        <div class="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                            <a href="#">John Doe</a> Posted the question: <a href="#">How can I change my annual reports for the better effect?</a>
                        </div>
                        <div class="activity__list__body entry-content">
                            <p>
                                <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipisicing elit. Voluptatibus ab a nostrum repudiandae dolorem ut quaerat veniam asperiores, rerum voluptatem magni dolores corporis!
                                <em>Molestiae commodi nesciunt a, repudiandae repellendus ea.</em>
                            </p>
                        </div>
                        <div class="activity__list__footer">
                            <a href="#"> <i class="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i class="fa fa-comments"></i>23</a>
                            <span> <i class="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                    <li>
                        <i class="activity__list__icon fa fa-question-circle-o"></i>
                        <div class="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            <a href="#">John Doe</a> Posted the question: <a href="#">How can I change my annual reports for the better effect?</a>
                        </div>
                        <div class="activity__list__body entry-content">
                            <blockquote>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ab a nostrum repudiandae dolorem ut quaerat veniam asperiores, rerum voluptatem magni dolores corporis! Molestiae commodi nesciunt a,
                                    repudiandae repellendus ea.
                                </p>
                            </blockquote>
                        </div>
                        <div class="activity__list__footer">
                            <a href="#"> <i class="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i class="fa fa-comments"></i>23</a>
                            <span> <i class="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                    <li>
                        <i class="activity__list__icon fa fa-image"></i>
                        <div class="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            <a href="#">John Doe</a> Uploaded 4 Image: <a href="#">Office Working Time</a>
                        </div>
                        <div class="activity__list__body entry-content">
                            <ul class="gallery">
                                <li>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                </li>
                                <li>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                </li>
                                <li>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                </li>
                                <li>
                                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div class="activity__list__footer">
                            <a href="#"> <i class="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i class="fa fa-comments"></i>23</a>
                            <span> <i class="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                    <li>
                        <i class="activity__list__icon fa fa-question-circle-o"></i>
                        <div class="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                            <a href="#">John Doe</a> Posted the question: <a href="#">How can I change my annual reports for the better effect?</a>
                        </div>
                        <div class="activity__list__body entry-content">
                            <blockquote>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ab a nostrum repudiandae dolorem ut quaerat veniam asperiores, rerum voluptatem magni dolores corporis! Molestiae commodi nesciunt a,
                                    repudiandae repellendus ea.
                                </p>
                            </blockquote>
                        </div>
                        <div class="activity__list__footer">
                            <a href="#"> <i class="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i class="fa fa-comments"></i>23</a>
                            <span> <i class="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                    <li>
                        <i class="activity__list__icon fa fa-lightbulb-o"></i>
                        <div class="activity__list__header">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            <a href="#">John Doe</a> bookmarked a page: <a href="#">Awesome Idea</a>
                        </div>
                        <div class="activity__list__footer">
                            <a href="#"> <i class="fa fa-thumbs-up"></i>123</a>
                            <a href="#"> <i class="fa fa-comments"></i>23</a>
                            <span> <i class="fa fa-clock"></i>2 hours ago</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
      </div>
    )
  }

export default Home;