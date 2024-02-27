package com.geeksarena.mail.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.geeksarena.mail.bean.MailBean;
import com.geeksarena.mail.bean.UserBean;
import com.geeksarena.mail.dao.MailDAO;


@Service
public class MailServiceImpl implements MailService{

	@Autowired
	private MailDAO dao;
	@Override
	public boolean userRegister(UserBean bean) {
		return dao.userRegister(bean);
	}

	@Override
	public UserBean login(String email, String password) {
		return dao.login(email, password);
	}

	@Override
	public List<MailBean> getAllMail(int from_id) {
		return dao.getAllMail(from_id);
	}

	@Override
	public boolean sendMail(String subject, String msg, int to_id, int from_id) {
		return dao.sendMail(subject, msg, to_id, from_id);
	}

	@Override
	public boolean deleteMail(int mid) {
		return dao.deleteMail(mid);
	}

@Override
	public boolean changePassword(String email, String password) {
		return dao.changePassword(email, password);
	}
	@Override
	public boolean draftMail(String subject, String msg, UserBean to, UserBean from) {
		return dao.draftMail(subject, msg, to, from);
	}

	@Override
	public UserBean searchByEmail(String email) {
		return dao.searchByEmail(email);
	}

	@Override
	public List<MailBean> getAllInbox(int to_id) {
		return dao.getAllInbox(to_id);
	}
}
