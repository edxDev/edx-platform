/**
 * Track the different click events on dashboard.
 */

var edx = edx || {};

(function ($, analytics) {
    'use strict';

    $(document).ready(function () {
        var course_title_link = $(".course-title-link"),
            course_image_link = $(".dashboard-course-image"),
            enter_course_link = $(".enter-course-link"),
            course_action_more = $(".wrapper-action-more"),
            find_courses_btn = $(".btn-find-courses"),
            course_learn_verified = $(".learned-verified-track");

        // Fire analytics events when the "course title link" button is clicked.
        course_title_link.on("click", function (event) {
            var courseKey = $(event.target).data("course-key");
            analytics.trackLink(
                "edx.bi.dashboard.course_title.clicked",
                {
                    category: "dashboard",
                    label: courseKey
                }
            );
        });

        // Fire analytics events when the "course image" is clicked.
        course_image_link.on("click", function (event) {
            var courseKey = $(event.target).closest(".dashboard-course-image").data("course-key");
            analytics.trackLink(
                "edx.bi.dashboard.course_image.clicked",
                {
                    category: "dashboard",
                    label: courseKey
                }
            );
        });

        // Fire analytics events when the "View Course" button is clicked.
        enter_course_link.on("click", function (event) {
            var courseKey = $(event.target).data("course-key");
            analytics.trackLink(
                "edx.bi.dashboard.enter_course.clicked",
                {
                    category: "dashboard",
                    label: courseKey
                }
            );
        });

        // Fire analytics events when the "Settings" button is clicked.
        course_action_more.on("click", function (event) {
            var courseKey = $(event.target).closest(".wrapper-action-more").data("course-key");
            analytics.trackLink(
                "edx.bi.dashboard.more_action_button.clicked",
                {
                    category: "dashboard",
                    label: courseKey
                }
            );
        });

        // Fire analytics events when the "Learned about verified track" link is clicked.
        course_learn_verified.on("click", function (event) {
            var courseKey = $(event.target).data("course-key");
            analytics.trackLink(
                "edx.bi.dashboard.learn_verified.clicked",
                {
                    category: "dashboard",
                    label: courseKey
                }
            );
        });

        // Fire analytics events when the "Find Courses" button is clicked.
        find_courses_btn.on("click", function () {
            analytics.trackLink(
                "edx.bi.dashboard.find_course_button.clicked",
                {
                    category: "dashboard",
                    label: "find_course_button"
                }
            );
        });
    });
})(jQuery, window.analytics);
