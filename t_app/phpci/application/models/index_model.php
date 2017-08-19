<?php defined('BASEPATH') OR exit('No direct script access allowed');
class Index_model extends CI_Model{
//   get all teacher_list in tea_id
public function teacher_list($id){

    $sql="select * from teacher where dowell='$id' order by id desc";
    $query=$this->db->query($sql);
    return $query->result();
}
//get teacher_list by years asc order
public function list_asc_order_years($dowell){
    $sql="select * from teacher where dowell='$dowell' order by years asc";
    $query=$this->db->query($sql);
    return $query->result();
}
//get teacher_list by years desc order
public function list_desc_order_years($dowell){
    $sql="select * from teacher where dowell='$dowell' order by years desc";
    $query=$this->db->query($sql);
    return $query->result();
}
//get teacher_list by price asc order
public function list_asc_order_price($dowell){
    $sql="select * from teacher where dowell='$dowell' order by price2 asc";
    $query=$this->db->query($sql);
    return $query->result();
}
//get teacher_list by years desc order
public function list_desc_order_price($dowell){
    $sql="select * from teacher where dowell='$dowell' order by price2 desc";
    $query=$this->db->query($sql);
    return $query->result();
} 
//system info
public function system_message(){
    $sql='select * from message  order by system_time desc';
    $query=$this->db->query($sql);
    return $query->result();
}
//get the list of chat
public function recommend($student_id){
    $sql="select * from message where student_id='$student_id' order by student_time desc";
    $query=$this->db->query($sql);
    return $query->result();
}
//focus or not 
public function index_focus($s_id){
    $sql="select * from attention where s_id='$s_id'";
    $query=$this->db->query($sql);
    return $query->result();
}
}
?>