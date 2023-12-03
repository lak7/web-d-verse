import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { db } from "../../firebase.js";
import { useState, ChangeEvent, FormEvent } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  ContactContainer,
  FormGroup,
  Span,
  ButtonContainer,
} from "./styles";


const Contact = ({ title, content, id, t }: ContactProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [loader, setLoader] = useState<boolean>(false);

  const userCollectionRef = collection(db, "contact");


  const handleSubmit = async (e: FormEvent) => {

    addDoc(userCollectionRef, {
      name: name,
      email: email,
      message: message
    })
    

    try {
      
      

      alert("Your message has been submitted👍");
    } catch (error) {
      // Handle error more generically
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An error occurred");
      }
      setLoader(false);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  // const { values, errors, handleChange, handleSubmit } = useForm(validate);

  // const ValidationType = ({ type }: ValidationTypeProps) => {
  //   const ErrorMessage = errors[type as keyof typeof errors];
  //   return (
  //     <Zoom direction="left">
  //       <Span>{ErrorMessage}</Span>
  //     </Zoom>
  //   );
  // };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}> 
          <Slide direction="right" triggerOnce>
            {/* <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup> */}
            <form className="form">
      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(e.target.value)
        }
      ></textarea>

      <button
      onClick={handleSubmit}
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

// const Contact: React.FC = () => {
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const [loader, setLoader] = useState<boolean>(false);

//   // const handleSubmit = (e: FormEvent) => {
//   //   e.preventDefault();
//   //   setLoader(true);

//   //   db.collection("contacts")
//   //     .add({
//   //       name: name,
//   //       email: email,
//   //       message: message,
//   //     })
//   //     .then(() => {
//   //       setLoader(false);
//   //       alert("Your message has been submitted👍");
//   //     })
//   //     .catch((error: Error) => {
//   //       // Handle error more generically
//   //       alert(error.message || "An error occurred");
//   //       setLoader(false);
//   //     });

//   //   setName("");
//   //   setEmail("");
//   //   setMessage("");
//   // };

//   const userCollectionRef = collection(db, "contact");


//   const handleSubmit = async (e: FormEvent) => {
//     addDoc(userCollectionRef, {
//       name: name,
//       email: email,
//       message: message
//     })

//     // try {
      
//     //   // const docRef = await addDoc(collection(db, "contacts"), {
//     //   //   name: name,
//     //   //   email: email,
//     //   //   message: message,
//     //   // });

//     //   alert("Your message has been submitted👍");
//     // } catch (error) {
//     //   // Handle error more generically
//     //   if (error instanceof Error) {
//     //     alert(error.message);
//     //   } else {
//     //     alert("An error occurred");
//     //   }
//     //   setLoader(false);
//     // }

//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <form className="form">
//       <label>Name</label>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
//       />

//       <label>Email</label>
//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e: ChangeEvent<HTMLInputElement>) =>
//           setEmail(e.target.value)
//         }
//       />

//       <label>Message</label>
//       <textarea
//         placeholder="Message"
//         value={message}
//         onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
//           setMessage(e.target.value)
//         }
//       ></textarea>

//       <button
//       onClick={handleSubmit}
//         type="submit"
//         style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
//       >
//         Submit
//       </button>
//     </form>
//   );
// };

export default withTranslation()(Contact);
