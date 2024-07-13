import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProgressBar from '@ramonak/react-progress-bar'
const EnrolledCourse = () => {

  const { token } = useSelector((state) => state.auth);

  const [EnrolledCourse, setEnrolledCourse] = useState(null);


  const getEnrolledCourse = async () => {
    try {

      // const response = await getUserEnrolledCourses(token);
      // setEnrolledCourse(response);


    } catch (e) {

    }
  }

  useEffect(() => {
    getEnrolledCourse();

  }, [])


  return (
    <div>
      <div>Enrolled Courses</div>
      {
        !EnrolledCourse ?
          (<div>Loading....</div>)
          : !EnrolledCourse.length ? (<p>You have not enrolled in any course</p>)
            : (
              <div>
                <div>
                  <p>Course name</p>
                  <p>Duration</p>
                  <p>Progress</p>
                </div>

                {/* cards for the list of enrolled courses */}
                {
                  EnrolledCourse.map((data, index) => {
                    <div>
                      <div>
                        <img src={data.thumbnail} alt="" />
                        <div>
                          <p>{data.courseName}</p>
                          <p>{data?.courseDescription}</p>
                        </div>
                      </div>

                      <div>
                        {data?.duration}
                      </div>

                      <div>
                        <p>Progress:{data.progressPercentage || 0}</p>
                        <ProgressBar
                          completed={data.progressPercentage || 0}
                          height='8px'
                          islabelVisible={false}
                        />
                      </div>
                    </div>
                  })
                }


              </div>
            )
      }
    </div>
  )
}

export default EnrolledCourse
