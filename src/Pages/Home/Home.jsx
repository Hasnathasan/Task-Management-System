import {
  FaBookmark,
  FaHome,
  FaProductHunt,
  FaShoppingCart,
} from "react-icons/fa";
import { BsFillPeopleFill, BsPersonCircle } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import {
  Button,
  Chip,
  Input,
  Modal,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import plusIcon from "../../../public/plus.png";
import plusIcon1 from "../../../public/plus (1).png";
import closeIcon from "../../../public/close.png";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
const Home = () => {
  const [numOfSubTasks, setNumOfSubTasks] = useState([1]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };
  const handleSubTasks = (index) => {
    numOfSubTasks.splice(index, 1)
    console.log(index, numOfSubTasks);
    const newNumOfSubTasks = [...numOfSubTasks];
    setNumOfSubTasks(newNumOfSubTasks)
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side w-full">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="w-80"></div>
        <ul className="menu flex-nowrap top-0 fixed px-8 h-screen bg-white py-10 w-80 space-y-2">
          <h2 className="text-2xl mb-5">Dashboard</h2>
          <li>
            <NavLink className="p-3 text-base" to="/">
              <BsPersonCircle></BsPersonCircle> Admin
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="/allUsers">
              <BsFillPeopleFill></BsFillPeopleFill> Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="/allProducts">
              <FaProductHunt></FaProductHunt> Manage Products
            </NavLink>
          </li>
          <li>
            <NavLink className="p-3 text-base" to="/addProduct">
              <FaProductHunt></FaProductHunt> Add New Product
            </NavLink>
          </li>
          <li>
            <Tooltip content={"Add Task"} className="capitalize">
              <Button
                onPress={() => handleOpen()}
                className="p-4 w-20 h-20"
                isIconOnly
                color="warning"
                variant="faded"
                aria-label="Take a photo"
              >
                <img src={plusIcon} alt="" />
              </Button>
            </Tooltip>
          </li>
        </ul>
      </div>

      {/* Modal Content */}
      <Modal backdrop={"blur"} size={"4xl"} scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>

              <ModalBody>
                <div className="flex gap-4">
                <Input type="text" variant={"bordered"} label="Task Title" />
                <Select
                  variant={"bordered"}
                  label="Task Status"
                  className="max-w-xs"
                >
                  <SelectItem value={"ToDo"}>To-do</SelectItem>
                  <SelectItem value={"In-progress"}>In progress</SelectItem>
                  <SelectItem value={"Done"}>Done</SelectItem>
                </Select>
                </div>
                <div className="flex gap-4">
                  <Textarea
                  variant="bordered"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  description="Enter a concise description of your project."
                  className="max-w-xs"
                />
                
                <RadioGroup label="Priority" orientation="horizontal">
                  <Radio value="buenos-aires">High</Radio>
                  <Radio value="sydney">Medium</Radio>
                  <Radio value="san-francisco">Low</Radio>
                </RadioGroup>
                
                </div>
                
                <div className="flex gap-4">
                  <Input
                    type="date"
                    variant={"bordered"}
                    label={"Start date"}
                    placeholder=" "
                  />
                  <Input
                    type="date"
                    variant={"bordered"}
                    label={"End date"}
                    placeholder=" "
                  />
                  
                </div>
                <div className="flex gap-3">
                  
                <Input
                  type="file"
                  multiple
                  variant={"bordered"}
                  size={"lg"}
                />
                <Select
                  variant={"bordered"}
                  label="Select a person"
                  className="max-w-xs"
                >
                  <SelectItem value={"Person-1"}>Person 1</SelectItem>
                  <SelectItem value={"Person-2"}>Person 2</SelectItem>
                  <SelectItem value={"Person-3"}>Person 3</SelectItem>
                </Select>
                </div>
                <div className="flex justify-between">
                <h2>Add Sub-Tasks <Chip color="success">{numOfSubTasks.length}</Chip></h2>
                <Button onClick={() => setNumOfSubTasks([...numOfSubTasks, numOfSubTasks.length + 1])} isIconOnly color="default" variant="faded" aria-label="Take a photo">
        <img src={plusIcon1} alt="" />
      </Button>
                </div>
                
                <div className="space-y-10">
                {
                  numOfSubTasks.map((num, index) => 
                  
                    <div className="flex gap-4 items-center" key={index}>
                      {console.log(numOfSubTasks, index)}
                      <div className="basis-1/2 flex gap-2 items-center">
                        <Button onClick={() => handleSubTasks(index)} isIconOnly color="default" variant="faded" aria-label="Take a photo">
        <img src={closeIcon} alt="" />
      </Button>
                      <Input type="text" variant={"bordered"} label="Task Title" />
                      </div>
                       
                <Textarea
                  variant="bordered"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  className="max-w-xs basis-1/2"
                />
                    </div>
                  )
                }
                </div>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Home;
