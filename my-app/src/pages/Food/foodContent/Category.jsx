import { FaPizzaSlice  } from "@react-icons/all-files/fa/FaPizzaSlice";
import { FaTiktok  } from "@react-icons/all-files/fa/FaTiktok";
import { CgGirl } from "@react-icons/all-files/cg/CgGirl";
import { GiSushis } from "@react-icons/all-files/ci/GiSushis";
import styled from "styled-components";

function Category() {
  return (
    <List>
        <div>
        <FaPizzaSlice />
        <h4>Italian</h4>
        </div>
        <div>
        <FaTiktok />
        <h4>TikTok Fav</h4>
        </div>
        <div>
        <CgGirl />
        <h4>Mom's</h4>
        </div>
        <div>
        <GiSushis />
        <h4>Asian</h4>
        </div>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem orem;
`;

export default Category