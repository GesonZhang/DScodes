<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Course extends CI_Controller{
    public function __construct(){
        parent::__construct();
        header('Access-Control-Allow-Origin:*');
        header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE');
        header('Access-Control-Allow-Headers:X-Requested-With,Content-Type');
        $this->load->model('course_model');
    }
//courseList_teacher
public function courseList_teacher(){
      $studentId=$this->input->post('studentId');
      $studentState=$this->input->post('studentState');

      $result =  $this->course_model->course_info($studentId,$studentState);
      echo json_encode($result);
}

public function courseList_teacherw(){
      $studentId=$this->input->post('studentId');
      $studentStatew=$this->input->post('studentStatew');

      $result =  $this->course_model->course_infow($studentId,$studentStatew);
      echo json_encode($result);
}

public function courseList_teacherf(){
      $studentId=$this->input->post('studentId');
      $studentStatef=$this->input->post('studentStatef');

      $result =  $this->course_model->course_infof($studentId,$studentStatef);
      echo json_encode($result);
}


}
?>