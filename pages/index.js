import { css } from '@emotion/css';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import Link from 'next/link';
import { AccountContext } from '../context';

/* import contract address and contract owner address */
import {
  contractAddress, ownerAddress
} from '../config';

/* import Application Binary Interface (ABI) */
import Blog from '../artifacts/contracts/Blog.sol/Blog.json';