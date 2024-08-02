import style from "./footer.module.css"

export default function ({ total_task, completed_task }) {
  return (
    <div className={style.footer}>
      <span className={style.task_count}>Total Task : {total_task}</span>
      <span className={style.task_count}>Completed Task : {completed_task}</span>
    </div>
  );
}