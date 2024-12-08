import { useEffect, useState } from "react";
import Input from "../../sharedCompenents/input/input";
import Modal from "../../sharedCompenents/modal/modal";
import "./contact-form.scss";
import { SendDemoRequest } from "./contact.service";
import { SearchLoader } from "../../sharedCompenents/loader/loader";
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
  const updateUserData = (name: string, value: string) => {
    setUserData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  const [isLoading, setIsLoading] = useState(false);
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
      userEmail.isValid
    );
  };
  useEffect(() => {
    updateEmail();
  }, [userEmail.value]);

  const addItem = () => {
    // alert('3')
    setIsLoading(true);
    SendDemoRequest({
      payload: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        orgName: userData.orgName,
        userEmail: userEmail.value,
      },
      successCb: () => {
        setIsLoading(false);
        onApiCall(
          messageType.success,
          "Our Team will contact you soon",
          "Thank You"
        );
      },
      errorCb: () => {
        onApiCall(
          messageType.failed,
          "Try with different email id",
          "Something wrong !"
        );
        setIsLoading(false);
      },
    });
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
