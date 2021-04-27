import React, { useState, useEffect } from 'react';
import styles from '../../styles/Main.module.css'
import Navbar from '../../components/Navbar';

const userData = [{
  "id": 1,
  "first_name": "Vince",
  "last_name": "Gleeton",
  "email": "vgleeton0@sphinn.com",
  "phone": "+62 (295) 213-3352"
}, {
  "id": 2,
  "first_name": "Liza",
  "last_name": "Hammerton",
  "email": "lhammerton1@usgs.gov",
  "phone": "+1 (743) 626-9193"
}, {
  "id": 3,
  "first_name": "Jamil",
  "last_name": "Anthon",
  "email": "janthon2@irs.gov",
  "phone": "+84 (509) 932-6566"
}, {
  "id": 4,
  "first_name": "Russ",
  "last_name": "Vedikhov",
  "email": "rvedikhov3@rakuten.co.jp",
  "phone": "+57 (213) 406-5585"
}, {
  "id": 5,
  "first_name": "Leopold",
  "last_name": "Beaglehole",
  "email": "lbeaglehole4@state.tx.us",
  "phone": "+86 (484) 533-0224"
}, {
  "id": 6,
  "first_name": "Nydia",
  "last_name": "Borman",
  "email": "nborman5@ning.com",
  "phone": "+593 (344) 408-9035"
}, {
  "id": 7,
  "first_name": "Edgardo",
  "last_name": "Pierrepoint",
  "email": "epierrepoint6@techcrunch.com",
  "phone": "+380 (515) 114-0943"
}, {
  "id": 8,
  "first_name": "Teodora",
  "last_name": "Fenby",
  "email": "tfenby7@clickbank.net",
  "phone": "+237 (694) 932-0087"
}, {
  "id": 9,
  "first_name": "Kanya",
  "last_name": "Cranna",
  "email": "kcranna8@cnn.com",
  "phone": "+996 (198) 601-3257"
}, {
  "id": 10,
  "first_name": "Burlie",
  "last_name": "Lawrenceson",
  "email": "blawrenceson9@mediafire.com",
  "phone": "+47 (106) 144-1120"
}, {
  "id": 11,
  "first_name": "Milty",
  "last_name": "Prangley",
  "email": "mprangleya@ovh.net",
  "phone": "+46 (708) 684-3837"
}, {
  "id": 12,
  "first_name": "Tatiania",
  "last_name": "Wiggington",
  "email": "twiggingtonb@hhs.gov",
  "phone": "+63 (404) 161-3531"
}, {
  "id": 13,
  "first_name": "Padraic",
  "last_name": "Anshell",
  "email": "panshellc@dyndns.org",
  "phone": "+81 (555) 183-4195"
}, {
  "id": 14,
  "first_name": "Ysabel",
  "last_name": "Coutts",
  "email": "ycouttsd@lulu.com",
  "phone": "+48 (942) 643-5816"
}, {
  "id": 15,
  "first_name": "Gibby",
  "last_name": "Martinuzzi",
  "email": "gmartinuzzie@devhub.com",
  "phone": "+86 (449) 194-2151"
}, {
  "id": 16,
  "first_name": "Oralie",
  "last_name": "Garlee",
  "email": "ogarleef@jigsy.com",
  "phone": "+55 (444) 548-5137"
}, {
  "id": 17,
  "first_name": "Devin",
  "last_name": "Mosedale",
  "email": "dmosedaleg@sciencedaily.com",
  "phone": "+86 (173) 198-9208"
}, {
  "id": 18,
  "first_name": "Randie",
  "last_name": "Moultrie",
  "email": "rmoultrieh@slideshare.net",
  "phone": "+255 (500) 277-3593"
}, {
  "id": 19,
  "first_name": "Meghann",
  "last_name": "Beausang",
  "email": "mbeausangi@europa.eu",
  "phone": "+1 (692) 468-6114"
}, {
  "id": 20,
  "first_name": "Bobbette",
  "last_name": "Gordon-Giles",
  "email": "bgordongilesj@nymag.com",
  "phone": "+52 (197) 524-8484"
}, {
  "id": 21,
  "first_name": "Alfie",
  "last_name": "Braunthal",
  "email": "abraunthalk@google.com.au",
  "phone": "+57 (322) 213-9654"
}, {
  "id": 22,
  "first_name": "Hilton",
  "last_name": "Levins",
  "email": "hlevinsl@dropbox.com",
  "phone": "+39 (646) 897-6075"
}, {
  "id": 23,
  "first_name": "Farris",
  "last_name": "Janaud",
  "email": "fjanaudm@who.int",
  "phone": "+55 (786) 297-2045"
}, {
  "id": 24,
  "first_name": "Guenna",
  "last_name": "Cristofalo",
  "email": "gcristofalon@bizjournals.com",
  "phone": "+86 (620) 576-8623"
}, {
  "id": 25,
  "first_name": "Prudence",
  "last_name": "Clegg",
  "email": "pcleggo@cisco.com",
  "phone": "+86 (635) 738-9022"
}, {
  "id": 26,
  "first_name": "Osmond",
  "last_name": "Cavy",
  "email": "ocavyp@cornell.edu",
  "phone": "+63 (281) 197-4550"
}, {
  "id": 27,
  "first_name": "Aidan",
  "last_name": "Bugbird",
  "email": "abugbirdq@state.gov",
  "phone": "+31 (813) 955-8944"
}, {
  "id": 28,
  "first_name": "Fernande",
  "last_name": "Rosenzveig",
  "email": "frosenzveigr@harvard.edu",
  "phone": "+61 (197) 298-4618"
}, {
  "id": 29,
  "first_name": "Nikaniki",
  "last_name": "Stammler",
  "email": "nstammlers@elegantthemes.com",
  "phone": "+62 (652) 449-2395"
}, {
  "id": 30,
  "first_name": "Starla",
  "last_name": "Drewery",
  "email": "sdreweryt@pcworld.com",
  "phone": "+55 (522) 843-2394"
}, {
  "id": 31,
  "first_name": "Chadwick",
  "last_name": "Dreschler",
  "email": "cdreschleru@cnet.com",
  "phone": "+46 (210) 653-5518"
}, {
  "id": 32,
  "first_name": "Chelsey",
  "last_name": "Gossage",
  "email": "cgossagev@seesaa.net",
  "phone": "+48 (792) 733-1485"
}, {
  "id": 33,
  "first_name": "Cliff",
  "last_name": "Stivani",
  "email": "cstivaniw@behance.net",
  "phone": "+86 (530) 837-3105"
}, {
  "id": 34,
  "first_name": "Zeke",
  "last_name": "Clyant",
  "email": "zclyantx@unicef.org",
  "phone": "+62 (763) 229-3630"
}, {
  "id": 35,
  "first_name": "Ambrosius",
  "last_name": "Fairall",
  "email": "afairally@ca.gov",
  "phone": "+420 (547) 390-5694"
}];

export default function Users() {
  const [users, setUsers] = useState(userData);
  const [checkedUsers, setCheckedUsers] = useState([]);

  const [selectedUpdateUser, setSelectedUpdateUser] = useState({ id: "", first_name: "please select customer first !" });
  const [updateUserFName, setUpdateUserFName] = useState("");
  const [updateUserLName, setUpdateUserLName] = useState("");
  const [updateUserEmail, setUpdateUserEmail] = useState("");
  const [updateUserPhone, setUpdateUserPhone] = useState("");

  const [addContent, setAddContent] = useState(false);
  const [addUserFName, setAddUserFName] = useState("");
  const [addUserLName, setAddUserLName] = useState("");
  const [addUserEmail, setAddUserEmail] = useState("");
  const [addUserPhone, setAddUserPhone] = useState("");

  const checkedUser = (e, id) => {
    if (e.target.checked) {
      var cu = [...checkedUsers];
      cu.push(id);
      setCheckedUsers(cu);
    } else {
      var cu = [...checkedUsers];
      var iindex = -1;
      for (var i = 0; i < cu.length; i++) {
        if (cu[i] === id) {
          iindex = i;
        }
      }
      if (iindex !== -1) {
        cu.splice(iindex, 1);
        setCheckedUsers(cu);
      }
    }
  }

  const addUser = () => {
    var lastId = users[users.length - 1].id + 1;
    var newUsers = [...users];
    newUsers.push({ id: lastId, first_name: addUserFName, last_name: addUserLName, email: addUserEmail, phone: addUserPhone });
    setUsers(newUsers);
    setAddContent(false);
    setAddUserFName("");
  }

  const updateUser = () => {
    for (var i = 0; i < users.length; i++) {
      if (selectedUpdateUser.id === users[i].id) {
        var uUsers = [...users];
        uUsers[i].first_name = updateUserFName;
        uUsers[i].last_name = updateUserLName;
        uUsers[i].email = updateUserEmail;
        uUsers[i].phone = updateUserPhone;
        setUsers(uUsers);
        setSelectedUpdateUser({ id: "" });
        break;
      }
    }
  }

  const deleteUsers = () => {
    var updatedUsers = [];
    for (var i = 0; i < users.length; i++) {
      var isInside = checkedUsers.find((item) => {
        return item === users[i].id;
      })
      if (!isInside) {
        updatedUsers.push(users[i]);
      }
    }
    setUsers(updatedUsers);
    setCheckedUsers([]);
  }

  useEffect(() => {
    if (selectedUpdateUser.id) {
      setUpdateUserFName(selectedUpdateUser.first_name);
      setUpdateUserLName(selectedUpdateUser.last_name);
      setUpdateUserEmail(selectedUpdateUser.email);
      setUpdateUserPhone(selectedUpdateUser.phone);
    } else {
      setUpdateUserFName("");
      setUpdateUserLName("");
      setUpdateUserEmail("");
      setUpdateUserPhone("");
    }
  }, [selectedUpdateUser]);

  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <div className={styles.userContainer}>
        <div className={styles.controlBtnContainer}>
          <a onClick={() => { setAddContent(true); }} className={styles.btnAdd}>Add Customer</a>
          <a onClick={() => { deleteUsers(); }} className={styles.btnDelete}>Delete Customer/Customers</a>
        </div>
        {selectedUpdateUser.id
          ? <div className={styles.updateContainer}>
            <h4>Update Customer</h4>
            <input
              value={updateUserFName || selectedUpdateUser.first_name}
              onChange={(e) => { setUpdateUserFName(e.target.value); }}
              type="text" />
            <input
              value={updateUserLName || selectedUpdateUser.last_name}
              onChange={(e) => { setUpdateUserLName(e.target.value); }}
              type="text" />
            <input
              value={updateUserEmail || selectedUpdateUser.email}
              onChange={(e) => { setUpdateUserEmail(e.target.value); }}
              type="text" />
            <input
              value={updateUserPhone || selectedUpdateUser.phone}
              onChange={(e) => { setUpdateUserPhone(e.target.value); }}
              type="text" />
            <a onClick={() => { updateUser(); }} className={styles.saveBtn}>Update Customer</a>
          </div>
          : null
        }
        {addContent
          ? <div className={styles.updateContainer}>
            <h4>Add Customer</h4>
            <input
              value={addUserFName || ""}
              onChange={(e) => { setAddUserFName(e.target.value); }}
              placeholder="Please Enter User First Name"
              type="text" />
            <input
              value={addUserLName || ""}
              onChange={(e) => { setAddUserLName(e.target.value); }}
              placeholder="Please Enter User Last Name"
              type="text" />
            <input
              value={addUserEmail || ""}
              onChange={(e) => { setAddUserEmail(e.target.value); }}
              placeholder="Please Enter User Email Name"
              type="text" />
            <input
              value={addUserPhone || ""}
              onChange={(e) => { setAddUserPhone(e.target.value); }}
              placeholder="Please Enter User Phone Name"
              type="text" />
            <a onClick={() => { addUser(); }} className={styles.btnAdd}>Add New Customer</a>
          </div>
          : null
        }
        <div>
          <div className={styles.userRow}>
            <span>Customer Name</span>
            <span>Customer Email</span>
            <span>Customer Phone</span>
            <span></span>
          </div>
          {users.map((user, index) => {
            return <div className={styles.userRow} key={index}>
              <p>{user.first_name} {user.last_name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <div className={styles.userRowInputContainer}>
                <a onClick={() => { setSelectedUpdateUser(user); }} className={styles.btnUpdate}>Update</a>
                <input checked={checkedUsers.find((uid) => { return uid === user.id }) ? true : false} onChange={(e) => { checkedUser(e, user.id); }} className={styles.userCheckbox} type="checkbox"></input>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
