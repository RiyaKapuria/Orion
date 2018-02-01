import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class DashBoard extends Component {
  render() {
    return (
      <section className="content">
        <div className="row">
          <div className="col-md-8">
            <ul className="timeline">
              <li className="time-label">
                <span className="bg-red">
                  News Updates
                </span>
              </li>
              <li>
                <i className="fa fa-envelope bg-blue"></i>
                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 12:05</span>
                  <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>
                  <div className="timeline-body">
                    Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                    weebly ning heekya handango imeem plugg dopplr jibjab, movity
                    jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                    quora plaxo ideeli hulu weebly balihoo...
                  </div>
                  <div className="timeline-footer">
                    <a className="btn btn-primary btn-xs">Read more</a>
                  </div>
                </div>
              </li>
              <li>
                <i className="fa fa-user bg-aqua"></i>
                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 5 mins ago</span>
                  <h3 className="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request</h3>
                </div>
              </li>
              <li>
                <i className="fa fa-comments bg-yellow"></i>
                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 27 mins ago</span>
                  <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>
                  <div className="timeline-body">
                    Take me to your leader!
                    Switzerland is small and neutral!
                    We are more like Germany, ambitious and misunderstood!
                  </div>
                  <div className="timeline-footer">
                    <a className="btn btn-warning btn-flat btn-xs">View comment</a>
                  </div>
                </div>
              </li>
              <li>
                <i className="fa fa-camera bg-purple"></i>
                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 2 days ago</span>
                  <h3 className="timeline-header"><a href="#">Shiv</a> uploaded new photos</h3>
                  <div className="timeline-body">
                    <img src="dist/img/rf1.jpg" alt="..." className="margin" />
                    <img src="dist/img/rf2.jpg" alt="..." className="margin" />
                    <img src="dist/img/rf3.jpg" alt="..." className="margin" />
                    <img src="dist/img/rf4.jpg" alt="..." className="margin" />
                    <img src="dist/img/rf5.jpg" alt="..." className="margin" />
                  </div>
                </div>
              </li>
              <li>
                <i className="fa fa-video-camera bg-maroon"></i>
                <div className="timeline-item">
                  <span className="time"><i className="fa fa-clock-o"></i> 5 days ago</span>
                  <h3 className="timeline-header"><a href="#">Mr. Dinesh</a> shared a video</h3>
                  <div className="timeline-body">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vYF7wy64iXk" frameBorder="0" allowFullScreen=""></iframe>
                    </div>
                  </div>
                  <div className="timeline-footer">
                    <a href="https://www.youtube.com/watch?v=vYF7wy64iXk" target="_blank" className="btn btn-xs bg-maroon">See comments</a>
                  </div>
                </div>
              </li>
              <li>
                <i className="fa fa-clock-o bg-gray"></i>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="small-box bg-aqua">
              <div className="inner">
                <h3>5</h3>
                <p>My Projects</p>
              </div>
              <div className="icon">
                <i className="fa fa-briefcase"></i>
              </div>
              <Link to="/Project" className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
            <div className="small-box bg-yellow">
              <div className="inner">
                <h4><b>Announcements</b></h4>
                <Link to="/Project" style={{color: "white"}}><p>Catalyst Nov</p></Link>
                <Link to="/Project" style={{color: "white"}}><p>News Letter Sep'12</p></Link>
              </div>
              <div className="icon">
                <i className="fa fa-volume-up"></i>
              </div>
            </div>
            <div className="small-box bg-red">
              <div className="inner">
                <h4><b>Allocation Summary</b></h4>
                <p>My Projects</p>
              </div>
              <div className="icon">
                <i className="fa fa-flag-checkered"></i>
              </div>
              <Link to="/Project" className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
            <div className="small-box bg-green">
              <div className="inner">
                <h4><b>Recent Events</b></h4>
                <p>In Sedin Technologies</p>
              </div>
              <div className="icon">
                <i className="fa fa-history"></i>
              </div>
              <a href="https://sedintechnologies.com/" target="_blank" className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
