doctype html
html(lang='en')
  head
    // start: Meta
    meta(charset='utf-8')
    title Eliran Ben Ishay
    meta(name='description', content='Bootstrap Metro Dashboard')
    meta(name='author', content='Dennis Ji')
    meta(name='keyword', content='Metro, Metro UI, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina')
    // end: Meta
    // start: Mobile Specific
    meta(name='viewport', content='width=device-width, initial-scale=1')
    // end: Mobile Specific
    // start: CSS
    link#bootstrap-style(href='css/bootstrap.min.css', rel='stylesheet')
    link(href='css/bootstrap-responsive.min.css', rel='stylesheet')
    link#base-style(href='css/style.css', rel='stylesheet')
    link#base-style-responsive(href='css/style-responsive.css', rel='stylesheet')
    link(href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&subset=latin,cyrillic-ext,latin-ext', rel='stylesheet', type='text/css')
    // end: CSS
    // The HTML5 shim, for IE6-8 support of HTML5 elements
    //if lt IE 9
      script(src='http://html5shim.googlecode.com/svn/trunk/html5.js')
      link#ie-style(href='css/ie.css', rel='stylesheet')
    //if IE 9
      link#ie9style(href='css/ie9.css', rel='stylesheet')
    // start: Favicon
    link(rel='shortcut icon', href='img/favicon.ico')
    // end: Favicon
  body    
    // start: Header
    .navbar
      .navbar-inner
        .container-fluid
          a.btn.btn-navbar(data-toggle='collapse', data-target='.top-nav.nav-collapse,.sidebar-nav.nav-collapse')
            span.icon-bar
            span.icon-bar
            span.icon-bar
          a.brand(href='index.html')
            span ATB Oil Settlement
          // start: Header Menu
          .nav-no-collapse.header-nav
            ul.nav.pull-right
              li.dropdown.hidden-phone
                a.btn.dropdown-toggle(data-toggle='dropdown', href='#')
                  i.icon-bell
                  span.badge.red
                    | 7
                ul.dropdown-menu.notifications
                  li.dropdown-menu-title
                    span You have 11 notifications
                    a(href='#refresh')
                      i.icon-repeat
                  li
                    a(href='#')
                      span.icon.blue
                        i.icon-user
                      span.message New user registration
                      span.time 1 min
                  li
                    a(href='#')
                      span.icon.green
                        i.icon-comment-alt
                      span.message New comment
                      span.time 7 min
                  li
                    a(href='#')
                      span.icon.green
                        i.icon-comment-alt
                      span.message New comment
                      span.time 8 min
                  li
                    a(href='#')
                      span.icon.green
                        i.icon-comment-alt
                      span.message New comment
                      span.time 16 min
                  li
                    a(href='#')
                      span.icon.blue
                        i.icon-user
                      span.message New user registration
                      span.time 36 min
                  li
                    a(href='#')
                      span.icon.yellow
                        i.icon-shopping-cart
                      span.message 2 items sold
                      span.time 1 hour
                  li.warning
                    a(href='#')
                      span.icon.red
                        i.icon-user
                      span.message User deleted account
                      span.time 2 hour
                  li.warning
                    a(href='#')
                      span.icon.red
                        i.icon-shopping-cart
                      span.message New comment
                      span.time 6 hour
                  li
                    a(href='#')
                      span.icon.green
                        i.icon-comment-alt
                      span.message New comment
                      span.time yesterday
                  li
                    a(href='#')
                      span.icon.blue
                        i.icon-user
                      span.message New user registration
                      span.time yesterday
                  li.dropdown-menu-sub-footer
                    a View all notifications
              // start: Notifications Dropdown
              li.dropdown.hidden-phone
                a.btn.dropdown-toggle(data-toggle='dropdown', href='#')
                  i.icon-calendar
                  span.badge.red
                    | 5
                ul.dropdown-menu.tasks
                  li.dropdown-menu-title
                    span You have 17 tasks in progress
                    a(href='#refresh')
                      i.icon-repeat
                  li
                    a(href='#')
                      span.header
                        span.title iOS Development
                        span.percent
                      .taskProgress.progressSlim.red 80
                  li
                    a(href='#')
                      span.header
                        span.title Android Development
                        span.percent
                      .taskProgress.progressSlim.green 47
                  li
                    a(href='#')
                      span.header
                        span.title ARM Development
                        span.percent
                      .taskProgress.progressSlim.yellow 32
                  li
                    a(href='#')
                      span.header
                        span.title ARM Development
                        span.percent
                      .taskProgress.progressSlim.greenLight 63
                  li
                    a(href='#')
                      span.header
                        span.title ARM Development
                        span.percent
                      .taskProgress.progressSlim.orange 80
                  li
                    a.dropdown-menu-sub-footer View all tasks
              // end: Notifications Dropdown
              // start: Message Dropdown
              li.dropdown.hidden-phone
                a.btn.dropdown-toggle(data-toggle='dropdown', href='#')
                  i.icon-envelope
                  span.badge.red
                    | 4
                ul.dropdown-menu.messages
                  li.dropdown-menu-title
                    span You have 9 messages
                    a(href='#refresh')
                      i.icon-repeat
                  li
                    a(href='#')
                      span.avatar
                        img(src='img/avatar.jpg', alt='Avatar')
                      span.header
                        span.from
                          | Dennis Ji
                        span.time
                          | 6 min
                      span.message
                        | Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                  li
                    a(href='#')
                      span.avatar
                        img(src='img/avatar.jpg', alt='Avatar')
                      span.header
                        span.from
                          | Dennis Ji
                        span.time
                          | 56 min
                      span.message
                        | Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                  li
                    a(href='#')
                      span.avatar
                        img(src='img/avatar.jpg', alt='Avatar')
                      span.header
                        span.from
                          | Dennis Ji
                        span.time
                          | 3 hours
                      span.message
                        | Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                  li
                    a(href='#')
                      span.avatar
                        img(src='img/avatar.jpg', alt='Avatar')
                      span.header
                        span.from
                          | Dennis Ji
                        span.time
                          | yesterday
                      span.message
                        | Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                  li
                    a(href='#')
                      span.avatar
                        img(src='img/avatar.jpg', alt='Avatar')
                      span.header
                        span.from
                          | Dennis Ji
                        span.time
                          | Jul 25, 2012
                      span.message
                        | Lorem ipsum dolor sit amet consectetur adipiscing elit, et al commore
                  li
                    a.dropdown-menu-sub-footer View all messages
              // start: User Dropdown
              li.dropdown
                a.btn.dropdown-toggle(data-toggle='dropdown', href='#')
                  i.halflings-icon.white.user
                  |  Dennis Ji
                  span.caret
                ul.dropdown-menu
                  li.dropdown-menu-title
                    span Account Settings
                  li
                    a(href='#')
                      i.halflings-icon.user
                      |  Profile
                  li
                    a(href='login.html')
                      i.halflings-icon.off
                      |  Logout
              // end: User Dropdown
          // end: Header Menu
    // start: Header
    .container-fluid-full
      .row-fluid
        // start: Main Menu
        #sidebar-left.span2
          .nav-collapse.sidebar-nav
            ul.nav.nav-tabs.nav-stacked.main-menu
              li
                a(href='index.html')
                  i.icon-bar-chart
                  span.hidden-tablet  Dashboard
              li
                a(href='messages.html')
                  i.icon-envelope
                  span.hidden-tablet  Messages
              li
                a(href='tasks.html')
                  i.icon-tasks
                  span.hidden-tablet  Tasks
              li
                a(href='ui.html')
                  i.icon-eye-open
                  span.hidden-tablet  UI Features
              li
                a(href='widgets.html')
                  i.icon-dashboard
                  span.hidden-tablet  Widgets
              li
                a.dropmenu(href='#')
                  i.icon-folder-close-alt
                  span.hidden-tablet  Dropdown
                  span.label.label-important  3
                ul
                  li
                    a.submenu(href='submenu.html')
                      i.icon-file-alt
                      span.hidden-tablet  Sub Menu 1
                  li
                    a.submenu(href='submenu2.html')
                      i.icon-file-alt
                      span.hidden-tablet  Sub Menu 2
                  li
                    a.submenu(href='submenu3.html')
                      i.icon-file-alt
                      span.hidden-tablet  Sub Menu 3
              li
                a(href='form.html')
                  i.icon-edit
                  span.hidden-tablet  Forms
              li
                a(href='chart.html')
                  i.icon-list-alt
                  span.hidden-tablet  Charts
              li
                a(href='typography.html')
                  i.icon-font
                  span.hidden-tablet  Typography
              li
                a(href='gallery.html')
                  i.icon-picture
                  span.hidden-tablet  Gallery
              li
                a(href='table.html')
                  i.icon-align-justify
                  span.hidden-tablet  Tables
              li
                a(href='calendar.html')
                  i.icon-calendar
                  span.hidden-tablet  Calendar
              li
                a(href='file-manager.html')
                  i.icon-folder-open
                  span.hidden-tablet  File Manager
              li
                a(href='icon.html')
                  i.icon-star
                  span.hidden-tablet  Icons
              li
                a(href='login.html')
                  i.icon-lock
                  span.hidden-tablet  Login Page
        // end: Main Menu
        noscript
          .alert.alert-block.span10
            h4.alert-heading Warning!
            p
              | You need to have
              a(href='http://en.wikipedia.org/wiki/JavaScript', target='_blank') JavaScript
              |  enabled to use this site.
        // start: Content
        #content.span10
          block content        
          
        // /#content.span10
    // /fluid-row
    #myModal.modal.hide.fade
      .modal-header
        button.close(type='button', data-dismiss='modal') ×
        h3 Settings
      .modal-body
        p Here settings can be configured...
      .modal-footer
        a.btn(href='#', data-dismiss='modal') Close
        a.btn.btn-primary(href='#') Save changes
    #common-Modal1.common-modal.modal.fade(tabindex='-1', role='dialog', aria-hidden='true')
      .modal-content
        ul.list-inline.item-details
          li
            a(href='http://themifycloud.com') Admin templates
          li
            a(href='http://themescloud.org') Bootstrap themes
    .clearfix
    footer
      p
        span(style='text-align:left;float:left')
          | © 2013
          a(href='http://themifycloud.com/downloads/janux-free-responsive-admin-dashboard-template/', alt='Bootstrap_Metro_Dashboard') JANUX Responsive Dashboard
    // start: JavaScript
    script(src='js/jquery-1.9.1.min.js')
    script(src='js/jquery-migrate-1.0.0.min.js')
    script(src='js/jquery-ui-1.10.0.custom.min.js')
    script(src='js/jquery.ui.touch-punch.js')
    script(src='js/modernizr.js')
    script(src='js/bootstrap.min.js')
    script(src='js/jquery.cookie.js')
    script(src='js/fullcalendar.min.js')
    script(src='js/jquery.dataTables.min.js')
    script(src='js/excanvas.js')
    script(src='js/jquery.flot.js')
    script(src='js/jquery.flot.pie.js')
    script(src='js/jquery.flot.stack.js')
    script(src='js/jquery.flot.resize.min.js')
    script(src='js/jquery.chosen.min.js')
    script(src='js/jquery.uniform.min.js')
    script(src='js/jquery.cleditor.min.js')
    script(src='js/jquery.noty.js')
    script(src='js/jquery.elfinder.min.js')
    script(src='js/jquery.raty.min.js')
    script(src='js/jquery.iphone.toggle.js')
    script(src='js/jquery.uploadify-3.1.min.js')
    script(src='js/jquery.gritter.min.js')
    script(src='js/jquery.imagesloaded.js')
    script(src='js/jquery.masonry.min.js')
    script(src='js/jquery.knob.modified.js')
    script(src='js/jquery.sparkline.min.js')
    script(src='js/counter.js')
    script(src='js/retina.js')
    script(src='js/custom.js')
    // end: JavaScript
