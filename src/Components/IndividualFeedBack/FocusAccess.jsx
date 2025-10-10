import React from 'react'
import styles from "./FocusAccess.module.css"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export default function FocusAccess() {
    return (
        <div className={styles.focusAccess}>
            <div className={styles.focusAccessp}>Focus area for this interview</div>
            <div className={styles.focusAccessBoxes}>
                <div className={styles.focusAccessBox1}>
                    <div className={styles.focusAccessBox1com}>Communication Skill</div>
                    <div>Is the Candidate Able to explain  and describe technical terms and process to a non-expart</div>
                    <div>How do you rate written and verbal communication</div>
                    <div className={styles.focusAccessBox1stardiv}>
                        <div className={styles.focusAccessBox1star}>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Stack>
                        </div>
                        <div className={styles.focusAccessBox1decribe}></div>
                    </div>
                </div>
                <div className={styles.focusAccessBox1}>
                    <div className={styles.focusAccessBox1com}>Communication Skill</div>
                    <div>Is the Candidate Able to explain  and describe technical terms and process to a non-expart</div>
                    <div>How do you rate written and verbal communication</div>
                    <div className={styles.focusAccessBox1stardiv}>
                        <div className={styles.focusAccessBox1star}>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Stack>
                        </div>
                        <div className={styles.focusAccessBox1decribe}></div>
                    </div>
                </div>
                <div className={styles.focusAccessBox1}>
                    <div className={styles.focusAccessBox1com}>Communication Skill</div>
                    <div>Is the Candidate Able to explain  and describe technical terms and process to a non-expart</div>
                    <div>How do you rate written and verbal communication</div>
                    <div className={styles.focusAccessBox1stardiv}>
                        <div className={styles.focusAccessBox1star}>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Stack>
                        </div>
                        <div className={styles.focusAccessBox1decribe}></div>
                    </div>
                </div>
                <div className={styles.focusAccessBox1}>
                    <div className={styles.focusAccessBox1com}>Communication Skill</div>
                    <div>Is the Candidate Able to explain  and describe technical terms and process to a non-expart</div>
                    <div>How do you rate written and verbal communication</div>
                    <div className={styles.focusAccessBox1stardiv}>
                        <div className={styles.focusAccessBox1star}>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Stack>
                        </div>
                        <div className={styles.focusAccessBox1decribe}></div>
                    </div>
                </div>
                <div className={styles.focusAccessBox1}>
                    <div className={styles.focusAccessBox1com}>Communication Skill</div>
                    <div>Is the Candidate Able to explain  and describe technical terms and process to a non-expart</div>
                    <div>How do you rate written and verbal communication</div>
                    <div className={styles.focusAccessBox1stardiv}>
                        <div className={styles.focusAccessBox1star}>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Stack>
                        </div>
                        <div className={styles.focusAccessBox1decribe}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
