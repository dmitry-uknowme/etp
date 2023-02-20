namespace $.$$ {
  export class $etp_procedure_process_space_steps extends $.$etp_procedure_process_space_steps {
    // step_list(): readonly any[] {
    //   return [{ step_name: "da" }];
    // }

    step_review_arg() {
      const Role = $etp_procedure_process_person_role;
      return this.role() === Role.ORGANIZER
        ? "accepting"
        : this.role() === Role.PARTICIPANT
        ? "bid_edit"
        : "";
    }

    step_review_title() {
      const Role = $etp_procedure_process_person_role;
      return this.role() === Role.ORGANIZER
        ? "Прием заявок"
        : this.role() === Role.PARTICIPANT
        ? "Подача заявок"
        : "";
    }
  }
}
