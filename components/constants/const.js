
// for different coachings or institute change only INSTITUTE_ID 

export const INSTITUTE_ID=2
export const INSTITUTE_BACKEND_URL = `https://institute-env-backend.herokuapp.com/specific-institute/`


// following are important url for data reading don't mess with them , unless said.
export const GET_INSTITUTE_VIDEO_BY_PLAYLIST_URL=`${INSTITUTE_BACKEND_URL}video-by-playlist/`
export const GET_INSTITUTE_PLAYLIST_URL=`${INSTITUTE_BACKEND_URL}playlist/${INSTITUTE_ID}/`
export const GET_INSTITUTE_URL=`${INSTITUTE_BACKEND_URL}institute/${INSTITUTE_ID}/`
export const GET_INSTITUTE_NOTES_URL=`${INSTITUTE_BACKEND_URL}notes-list/${INSTITUTE_ID}/`
export const GET_INSTITUTE_POINTS_URL=`${INSTITUTE_BACKEND_URL}points-list/${INSTITUTE_ID}/`
export const GET_INSTITUTE_TESTLIST_URL=`${INSTITUTE_BACKEND_URL}test-list/${INSTITUTE_ID}/`
export const GET_INSTITUTE_STUDENT_RESULT_URL=`${INSTITUTE_BACKEND_URL}student-result-list/${INSTITUTE_ID}/`
export const GET_INSTITUTE_STUDENT_REVIEW_URL=`${INSTITUTE_BACKEND_URL}student-review-list/${INSTITUTE_ID}/`
export const GET_INSTITUTE_CONTACT_DETAIL_URL=`${INSTITUTE_BACKEND_URL}contact-detail/${INSTITUTE_ID}/`
export const GET_INSTITUTE_OWNER_DETAIL_URL=`${INSTITUTE_BACKEND_URL}owner-detail/${INSTITUTE_ID}/`
export const GET_INSTITUTE_PAGES_URL=`${INSTITUTE_BACKEND_URL}page-info/${INSTITUTE_ID}/`
export const GET_INSTITUTE_FAQ_URL=`${INSTITUTE_BACKEND_URL}faq/${INSTITUTE_ID}/`
export const GET_INSTITUTE_FEATURE_URL=`${INSTITUTE_BACKEND_URL}features/${INSTITUTE_ID}/`