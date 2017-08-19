<?php defined('BASEPATH') OR exit('No direct script access allowed');
class Course_model extends CI_Model{
//courseList_teacher course_info
public function course_info($studentId,$studentState){
     $sql="select * from join_class where s_id = '$studentId' && j_state = '$studentState'";
     $query=$this->db->query($sql);
      return $query->result();
}
public function course_infow($studentId,$studentStatew){
     $sql="select * from join_class where s_id = '$studentId' && j_state = '$studentStatew'";
     $query=$this->db->query($sql);
      return $query->result();
}
public function course_infof($studentId,$studentStatef){
     $sql="select * from join_class where s_id = '$studentId' && j_state = '$studentStatef'";
     $query=$this->db->query($sql);
      return $query->result();
}
}
?>