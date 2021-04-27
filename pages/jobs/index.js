import React, { useState, useEffect } from 'react';
import styles from '../../styles/Main.module.css'
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import next from 'next';

const const_jobs = [{
  "id": 1,
  "job_title": "Editor"
}, {
  "id": 2,
  "job_title": "Research Associate"
}, {
  "id": 3,
  "job_title": "Executive Secretary"
}, {
  "id": 4,
  "job_title": "GIS Technical Architect"
}, {
  "id": 5,
  "job_title": "Clinical Specialist"
}, {
  "id": 6,
  "job_title": "Structural Engineer"
}, {
  "id": 7,
  "job_title": "Director of Sales"
}, {
  "id": 8,
  "job_title": "Geological Engineer"
}, {
  "id": 9,
  "job_title": "Administrative Assistant IV"
}, {
  "id": 10,
  "job_title": "Geologist III"
}, {
  "id": 11,
  "job_title": "Civil Engineer"
}, {
  "id": 12,
  "job_title": "Analog Circuit Design manager"
}, {
  "id": 13,
  "job_title": "Graphic Designer"
}, {
  "id": 14,
  "job_title": "Sales Associate"
}, {
  "id": 15,
  "job_title": "Research Nurse"
}, {
  "id": 16,
  "job_title": "Environmental Tech"
}, {
  "id": 17,
  "job_title": "Editor"
}, {
  "id": 18,
  "job_title": "Compensation Analyst"
}, {
  "id": 19,
  "job_title": "Executive Secretary"
}, {
  "id": 20,
  "job_title": "Chief Design Engineer"
}, {
  "id": 21,
  "job_title": "Research Associate"
}, {
  "id": 22,
  "job_title": "Associate Professor"
}];

export default function Jobs() {
  const [jobs, setJobs] = useState(const_jobs);
  const [checkedJobs, setCheckedJobs] = useState([]);
  const [selectedUpdateJob, setSelectedUpdateJob] = useState({ id: "", job_title: "please select job first !" });
  const [jobTitle, setJobTitle] = useState("");
  const [addContent, setAddContent] = useState(false);
  const [addJobTitle, setAddJobTitle] = useState("");

  const checkedJob = (e, id) => {
    if (e.target.checked) {
      var cj = [...checkedJobs];
      cj.push(id);
      setCheckedJobs(cj);
    } else {
      var cj = [...checkedJobs];
      var iindex = -1;
      for (var i = 0; i < cj.length; i++) {
        if (cj[i] === id) {
          iindex = i;
        }
      }
      if (iindex !== -1) {
        cj.splice(iindex, 1);
        setCheckedJobs(cj);
      }
    }
  }

  const addJob = () => {
    var lastId = jobs[jobs.length - 1].id + 1;
    var newJobs = [...jobs];
    newJobs.push({ id: lastId, job_title: addJobTitle });
    setJobs(newJobs);
    setAddContent(false);
    setAddJobTitle("");
  }

  const updateJob = () => {
    for (var i = 0; i < jobs.length; i++) {
      if (selectedUpdateJob.id === jobs[i].id) {
        var uJobs = [...jobs];
        uJobs[i].job_title = jobTitle;
        setJobs(uJobs);
        setSelectedUpdateJob({ id: "", job_title: "please select job first !" });
        break;
      }
    }
  }

  const deleteJobs = () => {
    var updatedJobs = [];
    for (var i = 0; i < jobs.length; i++) {
      var isInside = checkedJobs.find((item) => {
        return item === jobs[i].id;
      })
      if (!isInside) {
        updatedJobs.push(jobs[i]);
      }
    }
    setJobs(updatedJobs);
    setCheckedJobs([]);
  }

  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <div className={styles.userContainer}>
        <div className={styles.controlBtnContainer}>
          <a onClick={() => { setAddContent(true); }} className={styles.btnAdd}>Add Job</a>
          <a onClick={() => { deleteJobs(); }} className={styles.btnDelete}>Delete Job/Jobs</a>
        </div>
        {selectedUpdateJob.id
          ? <div className={styles.updateContainer}>
            <h4>Update Job</h4>
            <input value={jobTitle || ""} onChange={(e) => { setJobTitle(e.target.value); }} placeholder={selectedUpdateJob.job_title || ""} type="text" />
            <a onClick={() => { updateJob(); }} className={styles.saveBtn}>Update Job Title</a>
          </div>
          : null
        }
        {addContent
          ? <div className={styles.updateContainer}>
            <h4>Add Job</h4>
            <input value={addJobTitle || ""} onChange={(e) => { setAddJobTitle(e.target.value); }} placeholder="Please Enter Job Title..." type="text" />
            <a onClick={() => { addJob(); }} className={styles.btnAdd}>Add New Job</a>
          </div>
          : null
        }
        <div>
          <div className={styles.userRow}>
            <span>Customer Name</span>
            <span>Job ID</span>
            <span></span>
          </div>
          {jobs.map((job, index) => {
            return <div className={styles.userRow} key={index}>
              <p>{job.job_title}</p>
              <p>{job.id}</p>
              <div className={styles.userRowInputContainer}>
                <a onClick={() => { setSelectedUpdateJob(job); }} className={styles.btnUpdate}>Update</a>
                <input checked={checkedJobs.find((jid) => { return jid === job.id }) ? true : false} onChange={(e) => { checkedJob(e, job.id); }} className={styles.userCheckbox} type="checkbox"></input>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}