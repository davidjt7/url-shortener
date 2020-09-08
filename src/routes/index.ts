import { Router } from "express";
import documents from "./url";

const router = Router();

router.use(
  documents,
);

export default router;
