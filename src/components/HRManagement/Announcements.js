import React, { Component } from 'react';

export class Announcements extends Component {
  render() {
    return (
      <div className="box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title">Announcements</h3>
        </div>
        <div className="box-body">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Created By</th>
                <th>Comments</th>
              </tr>
              <tr>
                <td>News letter sep'12</td>
                <td>Released new letter sep'12</td>
                <td><span className="badge bg-red">Divya</span></td>
                <td className="dropdown user-menu">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown">Post your Comment</a>
                  <div className="dropdown-menu box box-info">
                    <div className="box-body">
                      <form action="#" method="post">
                        <div className="input-group">
                          <input type="text" name="message" placeholder="Type Comment ..." className="form-control" />
                          <span className="input-group-btn">
                            <button type="submit" className="btn btn-primary btn-flat">Post</button>
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="box-footer">
                      <div className="direct-chat-msg">
                        <div className="direct-chat-info clearfix">
                          <span className="direct-chat-name pull-left">Riya Kapuria</span>
                          <span className="direct-chat-timestamp pull-right">27 Dec 12:01 pm</span>
                        </div>
                        <img className="direct-chat-img" src="../dist/img/riya.jpg" alt="Message User Image" />
                        <div className="direct-chat-text">testing</div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Catalyst nov</td>
                <td>Employees newsletter - creating magical moments</td>
                <td><span className="badge bg-yellow">Sonia</span></td>
                <td className="dropdown user-menu">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown">Post your Comment</a>
                  <div className="dropdown-menu box box-info">
                    <div className="box-body">
                      <form action="#" method="post">
                        <div className="input-group">
                          <input type="text" name="message" placeholder="Type Comment ..." className="form-control" />
                          <span className="input-group-btn">
                            <button type="submit" className="btn btn-primary btn-flat">Post</button>
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="box-footer">
                      <div className="direct-chat-msg">
                        <div className="direct-chat-info clearfix">
                          <span className="direct-chat-name pull-left">Riya Kapuria</span>
                          <span className="direct-chat-timestamp pull-right">27 Dec 12:01 pm</span>
                        </div>
                        <img className="direct-chat-img" src="../dist/img/riya.jpg" alt="Message User Image" />
                        <div className="direct-chat-text">testing</div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
