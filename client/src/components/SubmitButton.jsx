import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SubmitButton({ onClick }) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      className={classes.margin}
      onClick={onClick}
    >
      Submit
    </Button>
  );
}
