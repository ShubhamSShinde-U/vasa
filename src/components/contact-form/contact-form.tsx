import { useEffect, useState } from "react";
import Input from "../../sharedCompenents/input/input";
import Modal from "../../sharedCompenents/modal/modal";
import "./contact-form.scss";
import { SearchLoader } from "../../sharedCompenents/loader/loader";
import { Databases, ID } from "appwrite";
import { client } from "../../app-write/appWrite";
import { messageType } from "../../constant/helper";
function ContactForm({ onClose, onApiCall }: any) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    orgName: "",
  });
  const [userEmail, setUserEmail] = useState({
    value: "",
    isValid: false,
  });
  const [userNumber, setUserNumber] = useState({
    value: "",
    error: "",
    isValid: false,
  });
  const updateUserData = (name: string, value: string) => {
    setUserData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  const [isLoading, setIsLoading] = useState(false);
  const databases = new Databases(client);

  // const [showMsgModal, setShowMsgModal] = useState(false);

  const updateEmail = () => {
    if (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail.value)
    ) {
      setUserEmail((prev: any) => {
        return {
          ...prev,
          isValid: true,
        };
      });
    } else {
      setUserEmail((prev: any) => {
        return {
          ...prev,
          isValid: false,
        };
      });
    }
  };
  const isFormValid = () => {
    return (
      userData.firstName.length &&
      userData.lastName.length &&
      userData.orgName.length &&
      userEmail.isValid &&
      userNumber.isValid
    );
  };
  const validateNumber = () => {
    if (
      /^[+]?[0-9]{1,4}?[-\s.]?(\(?\d{3}\)?[-\s.]?)?\d{3}[-\s.]?\d{4}$/.test(
        userNumber.value
      )
    ) {
      setUserNumber((prev: any) => {
        return {
          ...prev,
          isValid: true,
        };
      });
    } else {
      setUserNumber((prev: any) => {
        return {
          ...prev,
          isValid: false,
          error: "Enter Valid Number",
        };
      });
    }
  };
  useEffect(() => {
    updateEmail();
  }, [userEmail.value]);

  useEffect(() => {
    validateNumber();
  }, [userNumber.value]);

  const addItem = () => {
    setIsLoading(true);

    console.log(import.meta?.env);

    const promise = databases.createDocument(
      import.meta.env.VITE_APP_WRITE_DB_ID,
      import.meta.env.VITE_APP_WRITE_COLLECTION_ID,
      ID.unique(),
      {
        firstName: userData.firstName,
        lastName: userData.lastName,
        orgName: userData.orgName,
        emailId: userEmail.value,
        status: "New",
        contactNumber: userNumber.value.toString(),
      }
    );

    promise.then(
      function (response) {
        console.log(response);
        onApiCall(
          messageType.success,
          "Our Team will contact you soon",
          "Thank You"
        );
        setIsLoading(false);
      },
      function () {
        onApiCall(
          messageType.failed,
          "Try with different email id",
          "Something wrong !"
        );
        setIsLoading(false);
      }
    );
    // SendDemoRequest({
    //   payload: {
    //     firstName: userData.firstName,
    //     lastName: userData.lastName,
    //     orgName: userData.orgName,
    //     emailId: userEmail.value,
    //     status: "New",
    //     contactNumber: userNumber,
    //   },
    //   successCb: () => {
    //     setIsLoading(false);
    //     onApiCall(
    //       messageType.success,
    //       "Our Team will contact you soon",
    //       "Thank You"
    //     );
    //   },
    //   errorCb: () => {
    //     onApiCall(
    //       messageType.failed,
    //       "Try with different email id",
    //       "Something wrong !"
    //     );
    //     setIsLoading(false);
    //   },
    // });
  };

  return (
    <Modal onClose={onClose}>
      <div className="contact-form">
        <div className="full-name-wrapper">
          <Input
            name={"firstName"}
            value={userData.firstName}
            placeholder={"Enter First Name"}
            onChange={(e: any) => {
              // console.log("firstName", value);
              updateUserData("firstName", e.target.value);
            }}
            label={"Name"}
          />
          <Input
            name={"lastName"}
            value={userData.lastName}
            placeholder={"Enter First Name"}
            onChange={(e: any) => {
              // console.log(value);
              updateUserData("lastName", e.target.value);
            }}
            label={"Name"}
          />
        </div>
        <Input
          name={"orgName"}
          label={"Organization name"}
          value={userData.orgName}
          placeholder="Enter Organization Name"
          onChange={(e: any) => {
            updateUserData("orgName", e.target.value);
          }}
        />
        <Input
          label={"Email ID"}
          placeholder={"Enter Your Email"}
          value={userEmail.value}
          onChange={(e: any) => {
            setUserEmail((prev: any) => {
              return {
                ...prev,
                value: e.target.value,
              };
            });
          }}
        ></Input>
        <Input
          label={"Contact Number"}
          maxx={10}
          placeholder={"Enter Your Contact Number"}
          value={userNumber.value}
          onChange={(e: any) => {
            setUserNumber((prev: any) => {
              return {
                ...prev,
                value: e.target.value,
              };
            });
          }}
          error={userNumber.error}
        ></Input>
        <button
          className={`primary-button ${!isFormValid() ? "disabled" : ""}`}
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isFormValid() && addItem();
          }}
        >
          {isLoading ? <SearchLoader /> : "Request"}
        </button>
      </div>
    </Modal>
  );
}

export default ContactForm;
