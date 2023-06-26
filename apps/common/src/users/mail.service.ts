import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: '',
        pass: '',
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
      const info = await this.transporter.sendMail({
        from: '',
        to,
        subject,
        text,
      });

      console.log('Email sent:', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email.');
    }
  }
}
